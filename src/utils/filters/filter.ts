import { AcctActivity } from 'hooks/useAccount/useGetAcctActivity/types';

// Filter transfers from a date
// Ex: filterByDate(new Date("2023-03-09T21:56:15.42Z")) dateFilter = toISOString
export const filterByDate = (data: AcctActivity[], dateFilter: Date) => {
  return data.filter((transfer) => {
    const date = new Date(transfer.dated);
    return date > dateFilter;
  });
};

export const filterByText = (data: AcctActivity[], text: string) => {
  // Returns filtered transfers if the 'description' field has the text of the 'text' parameter
  return data.filter((tranfer) => {
    if (tranfer.description) {
      return tranfer.description.toLowerCase().includes(text.toLowerCase());
    }
  });
};

export const filterByType = (data: AcctActivity[], type: string) => {
  // Returns filtered transfers if the 'description' field has the text of the 'text' parameter
  return data.filter((tranfer) =>
    tranfer.type.toLowerCase().includes(type.toLowerCase()),
  );
};

interface filters {
  date?: string;
  title?: string;
  type?: string;
}
export const pagination = (
  data: AcctActivity[],
  limit: number,
  page: number,
  options?: filters,
) => {
  // Calculates the index of the first and last item on the page
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  if (options) {
    if (options.date) {
      const filteredData = filterByDate(data, new Date(options.date));
      return {
        data: filteredData.slice(startIndex, endIndex),
        pages: Math.ceil(filteredData.length / limit),
        currentPage: page,
      };
    }
    if (options.title) {
      const filteredData = filterByText(data, options.title);
      return {
        data: filteredData.slice(startIndex, endIndex),
        pages: Math.ceil(filteredData.length / limit),
        currentPage: page,
      };
    }

    if (options.type) {
      const filteredByType = filterByType(data, options.type);
      return {
        data: filteredByType.slice(startIndex, endIndex),
        pages: Math.ceil(filteredByType.length / limit),
        currentPage: page,
      };
    }

    if (options.date && options.title) {
      const filteredData = filterByDate(data, new Date(options.date));
      const filteredByText = filterByText(filteredData, options.title);
      return {
        data: filteredByText.slice(startIndex, endIndex),
        pages: Math.ceil(filteredByText.length / limit),
        currentPage: page,
      };
    }

    if (options.type && options.title) {
      const filteredByType = filterByType(data, options.type);
      const filteredByText = filterByType(filteredByType, options.title);
      return {
        data: filteredByText.slice(startIndex, endIndex),
        pages: Math.ceil(filteredByText.length / limit),
        currentPage: page,
      };
    }
  }

  // Returns the requested page from the array and paging information
  return {
    data: data.slice(startIndex, endIndex),
    pages: Math.ceil(data.length / limit),
    currentPage: page,
  };
};

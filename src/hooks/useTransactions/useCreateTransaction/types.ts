export type TransactionPayload = {
  amount: number;
  dated: string;
  description: string;
};

export type CreateTransactionParam = {
  account_id: number;
  payload: TransactionPayload;
};

export type CreateTransactionResponse = {
  account_id: number;
  amount: number;
  dated: string;
  description: string;
  destination: string;
  id: number;
  origin: string;
  type: string;
};

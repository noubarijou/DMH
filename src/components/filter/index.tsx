import { Controller, useForm } from 'react-hook-form';
import { HiOutlineChevronRight } from 'react-icons/hi';

import { Button } from 'components';

import * as s from './filter.styles';

interface FilterProps {
  handleApplyClick: (selectedFilter: string, selectedOption: string) => void;
}

interface FormFilterProps {
  selectedOption: string;
  selectedFilter: string;
}

const Filter = ({ handleApplyClick }: FilterProps) => {
  const { control, watch, setValue } = useForm<FormFilterProps>({
    defaultValues: { selectedOption: 'tipo' },
  });
  const selectedOption = watch('selectedOption');
  const selectedFilter = watch('selectedFilter');

  const today = new Date();
  const yesterday = new Date();
  const lastWeek = new Date();
  const last15Days = new Date();
  const lastMonth = new Date();
  const lastYear = new Date();

  yesterday.setDate(today.getDate() - 1);
  lastWeek.setDate(today.getDate() - 7);
  last15Days.setDate(today.getDate() - 15);
  lastMonth.setDate(today.getDate() - 15);
  lastYear.setFullYear(today.getFullYear() - 1);
  const handleClearClick = () => {
    setValue('selectedOption', '');
    setValue('selectedFilter', '');
  };

  return (
    <s.FilterContainer>
      <s.FilterHeader>
        <Controller
          control={control}
          name={'selectedOption'}
          render={({ field }) => (
            <>
              <select {...field}>
                <option value="">Filtrar por:</option>
                <option value="periodo">Período</option>
                <option value="tipo">Tipo</option>
              </select>
            </>
          )}
        />
        <s.LimparFiltros onClick={handleClearClick}>
          Limpar filtros
        </s.LimparFiltros>
      </s.FilterHeader>
      {selectedOption === 'periodo' ? (
        <>
          <s.FilterOptionList>
            <Controller
              control={control}
              name="selectedFilter"
              render={({ field }) => (
                <>
                  <s.FilterOption>
                    <label htmlFor="hoje">Hoje</label>
                    <input
                      {...field}
                      type="radio"
                      id="hoje"
                      name="option"
                      value={today.toISOString()}
                    />
                  </s.FilterOption>
                  <s.FilterOption>
                    <label htmlFor="ontem">Ontem</label>
                    <input
                      {...field}
                      type="radio"
                      id="ontem"
                      name="option"
                      value={yesterday.toISOString()}
                    />
                  </s.FilterOption>
                  <s.FilterOption>
                    <label htmlFor="ultima semana">Última semana</label>
                    <input
                      {...field}
                      type="radio"
                      id="ultima semana"
                      name="option"
                      value={lastWeek.toISOString()}
                    />
                  </s.FilterOption>
                  <s.FilterOption>
                    <label htmlFor="ultimos 15 dias">Últimos 15 dias</label>
                    <input
                      {...field}
                      type="radio"
                      id="ultimos 15 dias"
                      name="option"
                      value={last15Days.toISOString()}
                    />
                  </s.FilterOption>
                  <s.FilterOption>
                    <label htmlFor="ultimo mes">Último mês</label>
                    <input
                      {...field}
                      type="radio"
                      id="ultimo mes"
                      name="option"
                      value={lastMonth.toISOString()}
                    />
                  </s.FilterOption>
                  <s.FilterOption>
                    <label htmlFor="ultimo ano">Último ano</label>
                    <input
                      {...field}
                      type="radio"
                      id="ultimo ano"
                      name="option"
                      value={lastYear.toISOString()}
                    />
                  </s.FilterOption>
                  <s.FilterOption>
                    <p>Outro período</p>
                    <HiOutlineChevronRight />
                  </s.FilterOption>
                </>
              )}
            />
          </s.FilterOptionList>
        </>
      ) : (
        <>
          <s.FilterOptionList>
            <Controller
              control={control}
              name="selectedFilter"
              render={({ field }) => (
                <>
                  <s.FilterOption>
                    <label htmlFor="entrada">Entrada</label>
                    <input
                      {...field}
                      type="radio"
                      id="entrada"
                      name="option"
                      value="Deposit"
                    />
                  </s.FilterOption>
                  <s.FilterOption>
                    <label htmlFor="saida">Saída</label>
                    <input
                      {...field}
                      type="radio"
                      id="saida"
                      name="option"
                      value="Transfer"
                    />
                  </s.FilterOption>
                </>
              )}
            />
          </s.FilterOptionList>
        </>
      )}
      <s.ButtonContainer>
        <Button variant="tertiary" size="xsmall">
          Fechar
        </Button>
        <Button
          variant="primary"
          size="xsmall"
          onClick={() => handleApplyClick(selectedFilter, selectedOption)}
        >
          Aplicar
        </Button>
      </s.ButtonContainer>
    </s.FilterContainer>
  );
};

export { Filter };

import React, { useState } from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi';

import { Button } from 'components';

import * as s from './filter.styles';

const Filter = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  console.log(selectedFilter);

  const handleOptionClick = (event: React.MouseEvent<HTMLOptionElement>) => {
    setSelectedOption(event.currentTarget.value);
  };
  const handleFilterClick = (event: React.MouseEvent<HTMLInputElement>) => {
    setSelectedFilter(event.currentTarget.value);
  };

  return (
    <s.FilterContainer>
      <s.FilterHeader>
        <label htmlFor="filtro" />
        <select
          name="filtro"
          id="filtro"
          value={selectedOption}
          onChange={(event) => setSelectedOption(event.target.value)}
        >
          <option value="">Filtrar por:</option>
          <option value="periodo" onClick={handleOptionClick}>
            Período
          </option>
          <option value="tipo" onClick={handleOptionClick}>
            Tipo
          </option>
        </select>{' '}
        Limpar filtros
      </s.FilterHeader>
      <s.FilterOptionList>
        {selectedOption === 'periodo' ? (
          <>
            <s.FilterOption>
              <label htmlFor="hoje">Hoje</label>
              <input
                type="radio"
                id="hoje"
                name="option"
                value="hoje"
                onClick={handleFilterClick}
              />
            </s.FilterOption>
            <s.FilterOption>
              <label htmlFor="ontem">Ontem</label>
              <input
                type="radio"
                id="ontem"
                name="option"
                value="ontem"
                onClick={handleFilterClick}
              />
            </s.FilterOption>
            <s.FilterOption>
              <label htmlFor="ultima semana">Última semana</label>
              <input
                type="radio"
                id="ultima semana"
                name="option"
                value="ultima semana"
                onClick={handleFilterClick}
              />
            </s.FilterOption>
            <s.FilterOption>
              <label htmlFor="ultimos 15 dias">Últimos 15 dias</label>
              <input
                type="radio"
                id="ultimos 15 dias"
                name="option"
                value="ultimos 15 dias"
                onClick={handleFilterClick}
              />
            </s.FilterOption>
            <s.FilterOption>
              <label htmlFor="ultimo mes">Último mês</label>
              <input
                type="radio"
                id="ultimo mes"
                name="option"
                value="ultimo mes"
                onClick={handleFilterClick}
              />
            </s.FilterOption>
            <s.FilterOption>
              <label htmlFor="ultimo ano">Último ano</label>
              <input
                type="radio"
                id="ultimo ano"
                name="option"
                value="ultimo ano"
                onClick={handleFilterClick}
              />
            </s.FilterOption>
            <s.FilterOption>
              <p>Outro período</p>
              <HiOutlineChevronRight />
            </s.FilterOption>
          </>
        ) : (
          <>
            <s.FilterOption>
              <label htmlFor="entrada">Entrada</label>
              <input
                type="radio"
                id="entrada"
                name="option"
                value="entrada"
                onClick={handleFilterClick}
              />
            </s.FilterOption>
            <s.FilterOption>
              <label htmlFor="saida">Saída</label>
              <input
                type="radio"
                id="saida"
                name="option"
                value="saida"
                onClick={handleFilterClick}
              />
            </s.FilterOption>
          </>
        )}
      </s.FilterOptionList>
      <s.ButtonContainer>
        <Button variant="primary" size="xsmall">
          Aplicar
        </Button>
      </s.ButtonContainer>
    </s.FilterContainer>
  );
};

export default Filter;

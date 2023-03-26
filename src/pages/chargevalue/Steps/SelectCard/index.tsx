import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import { useTheme } from 'styled-components';

import { useGetCards } from 'hooks/useCards/useGetCards';
import { useStepsStore } from 'store/steps';

import * as s from './card.styles';

const Card = () => {
  const [selected, setSelected] = useState<any>([]);
  const [selectedCard, setSelectedCard] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const { data: cardsList } = useGetCards();
  const router = useRouter();
  const nextStep = useStepsStore((state) => state.setNextStep);
  const {
    colors: { primary },
  } = useTheme();

  const selectCard = (index: number, card: any) => {
    let newSelected = [];
    for (let i = 0; i < selected.length; i++) {
      newSelected[i] = false;
    }
    newSelected[index] = true;
    setSelected(newSelected);
    setSelectedCard(card);
  };

  useEffect(() => {
    if (loading && cardsList?.length !== 0 && cardsList?.length !== undefined) {
      let newSelected = [];
      for (let i = 0; i < cardsList.length; i++) {
        if (i === 0) {
          newSelected.push(true);
        } else {
          newSelected.push(false);
        }
      }
      setSelected(newSelected);
      setSelectedCard(cardsList[0]);
      setLoading(false);
    }
  }, [loading, cardsList, selected, selectedCard]);

  return (
    <s.allDiv>
      <s.mainContainer>
        <h1>Selecione um cartão</h1>
        <s.cardsContainer>
          <p>Seus cartões</p>
          {cardsList?.length !== 0 &&
            !loading &&
            cardsList?.map((card: any, index: number) => (
              <>
                <s.cardContainer key={index}>
                  <div className="card">
                    <div className="circle"></div>
                    <p>Final {card.number_id.toString().slice(-4)}</p>
                  </div>
                  {selected[index] === true ? (
                    <div
                      className="checkbox"
                      onClick={() => selectCard(index, card)}
                    >
                      <s.insideCircle></s.insideCircle>
                    </div>
                  ) : (
                    <div
                      className="checkbox"
                      onClick={() => selectCard(index, card)}
                    ></div>
                  )}
                </s.cardContainer>
                {index !== cardsList.length - 1 && (
                  <div className="divider"></div>
                )}
              </>
            ))}
        </s.cardsContainer>
        <s.lastContainer>
          <div onClick={() => router.push('cards')}>
            <AiOutlinePlusCircle size={45} color={primary} />
            <h2>Novo cartão</h2>
          </div>
          <s.button onClick={nextStep}>Continuar</s.button>
        </s.lastContainer>
      </s.mainContainer>
      <s.buttonMobile>Continuar</s.buttonMobile>
    </s.allDiv>
  );
};

export default Card;

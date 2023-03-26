import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { AiOutlineArrowRight, AiOutlinePlusCircle } from 'react-icons/ai';
import { BsCircleFill } from 'react-icons/bs';

import { useTheme } from 'styled-components';

import { ContainerPage, PageTitle, TableContainer } from 'components';
import { useCreateCard } from 'hooks/useCards/useCreateCard';
import { useDeleteCard } from 'hooks/useCards/useDeleteCard';
import { useGetCards } from 'hooks/useCards/useGetCards';
import AddCard from 'layouts/AddCard';
import nookies from 'nookies';

import * as s from './cards.styles';

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { '@digitalmoney:token': token } = nookies.get(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
      props: {},
    };
  }

  return {
    props: {},
  };
}

const Cards = () => {
  const [addNewCard, setAddNewCard] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  const { data: cardsList, refetch } = useGetCards();
  const { mutate: createCard } = useCreateCard();
  const { mutate: deleteCard } = useDeleteCard();

  const onClick = (e: any) => {
    e.preventDefault();
    setAddNewCard(true);
  };

  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
  }, [loading]);

  const handleCreateCard = (data: any) => {
    createCard(data, {
      onSuccess: () => {
        setLoading(true);
        refetch();
      },
      onError: (err) => console.log(err),
    });
  };

  const handleDeleteCard = (cardNumber: any) => {
    deleteCard(cardNumber, {
      onSuccess: () => refetch(),
      onError: (err) => console.log(err),
    });
  };

  const {
    colors: { primary },
  } = useTheme();

  return (
    <>
      <Head>
        <title>DMH | Cards</title>
      </Head>
      <ContainerPage>
        <>
          <PageTitle>Cartões</PageTitle>
          {!addNewCard ? (
            <>
              <s.addNewCardContainer>
                <s.callActionNewCard>
                  Adicione seu cartão de crédito ou débito
                </s.callActionNewCard>
                <s.btnNewCard onClick={onClick}>
                  <AiOutlinePlusCircle size="30" />
                  <p>Novo cartão</p>
                  <AiOutlineArrowRight size="30" />
                </s.btnNewCard>
              </s.addNewCardContainer>
              <TableContainer title="Seus cartões">
                {!loading &&
                  cardsList?.length !== 0 &&
                  cardsList?.map((card: any, index: number) => (
                    <s.DataContainer key={index}>
                      <s.Description>
                        <BsCircleFill color={primary} size="20" />
                        <s.DescriptionText>
                          Termina em {card.number_id.toString().slice(-4)}
                        </s.DescriptionText>
                      </s.Description>
                      <s.DeleteCardBtn
                        onClick={() => handleDeleteCard(card.id)}
                      >
                        Eliminar
                      </s.DeleteCardBtn>
                    </s.DataContainer>
                  ))}
              </TableContainer>
            </>
          ) : (
            <>
              <AddCard
                handleCreateCard={handleCreateCard}
                setAddNewCard={setAddNewCard}
              />
            </>
          )}
        </>
      </ContainerPage>
    </>
  );
};

export default Cards;

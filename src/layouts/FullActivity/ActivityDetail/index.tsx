import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import { useGetAcctTransaction } from 'hooks/useAccount/useGetAcctTransaction';
import nookies from 'nookies';

import * as s from './ActivityDetail.styles';

import { Button, ContainerPage, PageTitle } from '../../../components';

type ActivyDetailProps = {
  transactionId: number | undefined;
};

const ActivityDetail = ({ transactionId }: ActivyDetailProps) => {
  const { data: transaction, isLoading } = useGetAcctTransaction(transactionId);

  const priceFormatter = (num: number | undefined) => {
    return (
      num &&
      new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }).format(num)
    );
  };

  const dateFormatter = (date: Date | undefined) => {
    return (
      date &&
      new Intl.DateTimeFormat('pt-br', {
        dateStyle: 'long',
        timeStyle: 'short',
      }).format(new Date(date))
    );
  };

  console.log(transaction);

  return (
    <>
      <ContainerPage>
        <PageTitle>Suas atividades</PageTitle>
        {!isLoading && (
          <>
            <s.BlackContainer>
              <s.titleContainer>
                <div>
                  <AiOutlineCheckCircle size="25" />
                  <s.EmphasisText>Aprovada</s.EmphasisText>
                </div>
                <s.InfoDate className="desktop">
                  Criado em {dateFormatter(transaction.dated)}h
                </s.InfoDate>
              </s.titleContainer>
              <s.InfoDate className="mobile">
                Criado em {dateFormatter(transaction.dated)}h
              </s.InfoDate>
              <s.InfoContainer>
                <s.InfoSubTitle>Transferência em dinheiro</s.InfoSubTitle>
                <s.EmphasisText>
                  {priceFormatter(transaction.amount)}
                </s.EmphasisText>
                <s.InfoSubTitle>Transferido para</s.InfoSubTitle>
                <s.EmphasisText>{transaction.destination}</s.EmphasisText>
                <s.InfoSubTitle>Número da operação</s.InfoSubTitle>
                <s.EmphasisText className="number">
                  {transaction.id}
                </s.EmphasisText>
              </s.InfoContainer>
            </s.BlackContainer>
            <s.BtnContainer>
              <Button size="large">Baixar Comprovante</Button>
              <Button variant="tertiary" size="large">
                <Link href="/wallet">Voltar ao início</Link>
              </Button>
            </s.BtnContainer>
          </>
        )}
      </ContainerPage>
    </>
  );
};

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

export default ActivityDetail;

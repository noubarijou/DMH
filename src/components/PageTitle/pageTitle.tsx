import { AiOutlineArrowRight } from 'react-icons/ai';

import * as s from './pageTitle.styles';

type PageTitleProps = {
  children: React.ReactNode;
};

const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <>
      <s.PageTitle>
        <AiOutlineArrowRight />
        <s.PageTitleContent>{children}</s.PageTitleContent>
      </s.PageTitle>
    </>
  );
};

export { PageTitle };

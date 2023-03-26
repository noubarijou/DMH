import {
  createGlobalStyle,
  GlobalStyleComponent,
  css,
} from 'styled-components';

import reset from './reset';

const GlobalStyles = createGlobalStyle`
  ${reset};

  html,  body {
    @media only screen and (max-width: 915px) {
      //height: calc(140vh);
    }
    height: 100%;
    font-family: 16px;
  }

  ${({ theme }) => css`
    body {
      overflow: auto;
      font-family: ${theme.font.family};
      background-color: ${theme.colors.secondaryWhite};
    }
  `}
`;

export default GlobalStyles;

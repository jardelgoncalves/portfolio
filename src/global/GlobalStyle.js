import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';


import GilroyLight from '../assets/fonts/Gilroy-Light.otf';
import GilroyExtraBold from '../assets/fonts/Gilroy-ExtraBold.otf';

export default createGlobalStyle`
  ${reset};

  @font-face {
    font-family: "Gilroy Light";
    src: url('${GilroyLight}') format('opentype');
  }

  @font-face {
    font-family: "Gilroy ExtraBold";
    src: url('${GilroyExtraBold}') format('opentype');
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Gilroy ExtraBold';
    font-weight: 500;
    background-color: #191919;
  }

  ::placeholder {
    font-size: 17px;
    font-family: 'Gilroy ExtraBold';
    color: #ffffffb3;
    width: 100%;
  }
`;

import AllianceM from './Font/AllianceM.ttf';
import AllianceEB from './Font/AllianceEB.ttf';
import { colours } from './Colours.styles';
import { css } from '@emotion/react';

export const globalStyles = css`
  @font-face {
    font-family: 'AllianceM';
    src: url(${AllianceM}) format('truetype');
  }
  @font-face {
    font-family: 'AllianceEB';
    src: url(${AllianceEB}) format('opentype');
  }

  body {
    background-color: ${colours.sweetwhite};
    &:after {
      content: '';
      display: table;
      clear: both;
    }
  }

  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
`;

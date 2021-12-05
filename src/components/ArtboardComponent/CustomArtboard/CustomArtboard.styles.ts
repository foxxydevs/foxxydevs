import styled from '@emotion/styled';
import { colours } from 'config/Colours.styles';

type WrapperRowProps = {
  itemStart: boolean;
};

type WrapperSectionProps = {
  isHaveBackground?: boolean;
  padding: string;
};

export const WrapperSection = styled.div<WrapperSectionProps>`
  padding: ${(props) => props.padding};
  background-color: ${({ isHaveBackground }) =>
    isHaveBackground ? `${colours.carchoal}` : 'transparent'};
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 20px;
  }
`;

export const WrapperRow = styled.div<WrapperRowProps>`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ itemStart }) => (itemStart ? 'row-reverse' : 'row')};
`;

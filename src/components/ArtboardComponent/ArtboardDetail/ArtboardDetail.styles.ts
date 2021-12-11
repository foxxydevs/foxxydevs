import styled from '@emotion/styled';
import { colours } from 'config/Colours.styles';

type WrapperRowProps = {
  imgStart: boolean;
};

type WrapperSectionProps = {
  isHaveBackground?: boolean;
  padding: string;
};

type ImgWrapperProps = {
  start: string;
};

type ImgProps = {
  isReverse?: boolean;
};

type ButttonProps = {
  color?: string;
  hover?: string;
  fontBig: boolean;
  big: boolean;
  left?: boolean;
  isReverse?: boolean;
};

type TyphographyProps = {
  isReverse?: boolean;
};

export const WrapperSection = styled.div<WrapperSectionProps>`
  padding: ${(props) => props.padding};
  visibility: hidden;
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
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const WrapperColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 25px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 884px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div<TyphographyProps>`
  padding-top: 0;
  width: 115%;
  margin-left: ${({ isReverse }) => (isReverse ? '50px' : '-24px')};

  @media screen and (max-width: 1024px) {
    margin-left: ${({ isReverse }) => (isReverse ? '-30px' : '-15px')};
  }

  @media screen and (max-width: 980px) {
    padding-bottom: 65px;
    margin-left: ${({ isReverse }) => (isReverse ? '-50px' : '5px')};
  }

  @media screen and (max-width: 884px) {
    margin-left: 0px;
  }
`;

export const InnerText = styled.div`
  margin: 0;
  height: 200px;
  overflow: hidden;
`;

export const HeadingOne = styled.h1<TyphographyProps>`
  font-size: 45px;
  line-height: 1.1;
  margin-left: 1px;
  width: ${({ isReverse }) => (isReverse ? '520px' : '650px')};
  color: #4f1824;
  margin-bottom: 10px;
  font-family: 'AllianceEB';

  @media screen and (max-width: 884px) {
    width: ${({ isReverse }) => isReverse && '650px'};
    margin-left: -1px;
    font-size: 40px;
  }

  @media screen and (max-width: 768px) {
    width: 105%;
    font-size: 42px;
  }

  @media screen and (max-width: 428px) {
    margin-left: 0px;
    font-size: 31px;
  }

  @media screen and (max-width: 393px) {
    font-size: 26px;
  }

  @media screen and (max-width: 320px) {
    font-size: 30px;
    text-align: center;
  }
`;

export const HeadingTwo = styled.h1<TyphographyProps>`
  font-size: 45px;
  line-height: 1.1;
  margin-left: 1px;
  width: ${({ isReverse }) => (isReverse ? '520px' : '650px')};
  color: #4f1824;
  font-family: 'AllianceEB';

  @media screen and (max-width: 884px) {
    width: ${({ isReverse }) => isReverse && '650px'};
    margin-left: -1px;
    font-size: 40px;
  }

  @media screen and (max-width: 768px) {
    font-size: 42px;
    width: 105%;
  }
  @media screen and (max-width: 428px) {
    font-size: 31px;
    margin-left: 0px;
  }

  @media screen and (max-width: 393px) {
    font-size: 26px;
  }

  @media screen and (max-width: 320px) {
    font-size: 30px;
    margin-left: -5px;
    text-align: center;
  }
`;

export const Subtitle = styled.p<TyphographyProps>`
  max-width: 520px;
  font-size: 18px;
  line-height: 25px;
  font-family: 'AllianceM';
  margin-left: 1px;

  @media screen and (max-width: 1024px) {
    font-size: 19px;
    text-align: justify;
    margin-left: -5px;
  }

  @media screen and (max-width: 884px) {
    margin: 0px;
    max-width: 650px;
  }

  @media screen and (max-width: 600px) {
    font-size: 17px;
    max-width: 650px;
  }

  @media screen and (max-width: 280px) {
    text-align: center;
  }
`;

export const ImgWrapper = styled.div<ImgWrapperProps>`
  max-width: 555px;
  display: flex;
  margin-top: -50px;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img<ImgProps>`
  margin-right: ${({ isReverse }) => (isReverse ? '-30px' : '-100px')};
  border: 0;
  max-width: 130%;
  max-height: 530px;

  @media screen and (max-width: 1024px) {
    margin-right: ${({ isReverse }) => (isReverse ? '50px' : '-50px')};
    max-width: 110%;
  }

  @media screen and (max-width: 980px) {
    margin-right: ${({ isReverse }) => (isReverse ? '30px' : '-30px')};
  }

  @media screen and (max-width: 884px) {
    margin-right: ${({ isReverse }) => (isReverse ? '10px' : '0px')};
  }

  @media screen and (max-width: 768px) {
    margin-right: 0px;
  }

  /* only 320px media screen or lower*/
  @media screen and (max-width: 320px) {
    max-width: 130%;
    margin-right: -30px;
  }
`;

export const Button = styled.button<ButttonProps>`
  border-radius: 4px;
  margin-top: 25px;
  background: ${(props) => props.color};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '15px 45px' : '10px 20px')};
  text-align: center;
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '17px' : '12px')};
  outline: none;
  font-family: 'AllianceM';
  font-weight: bold;
  margin-left: ${({ left }) => (left ? '-70px' : '1px')};
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${(props) => props.hover};
  }
  @media screen and (max-width: 884px) {
    width: 100%;
    margin-left: 0px;
  }

  @media screen and (max-width: 280px) {
    font-size: 14px;
  }
`;

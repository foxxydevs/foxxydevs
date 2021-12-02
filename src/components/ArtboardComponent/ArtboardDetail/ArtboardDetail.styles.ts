import styled from '@emotion/styled';

type WrapperRowProps = {
  imgStart: boolean;
};

type ImgWrapperProps = {
  start: string;
};

type ButttonProps = {
  primary: boolean;
  fontBig: boolean;
  big: boolean;
  left?: boolean;
};

type WrapperSectionProps = {
  isHaveBackground?: boolean;
};

export const WrapperSection = styled.div<WrapperSectionProps>`
  padding: 100px 0;
  background-color: ${({ isHaveBackground }) =>
    isHaveBackground ? '#F5EBDF' : 'transparent'};
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

  @media screen and (max-width: 868px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 60px;
  max-width: 100%;
  margin-left: -24px;

  @media screen and (max-width: 980px) {
    padding-bottom: 65px;
    margin-left: 0px;
  }
`;

export const HeadingOne = styled.h1`
  font-size: 45px;
  line-height: 1.1;
  margin-left: -5px;
  width: 650px;
  color: #4f1824;
  margin-bottom: 10px;
  font-family: 'AllianceEB';

  @media screen and (max-width: 884px) {
    font-size: 40px;
  }

  @media screen and (max-width: 600px) {
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
    font-size: 32px;
    text-align: center;
  }
`;

export const HeadingTwo = styled.h1`
  font-size: 45px;
  line-height: 1.1;
  margin-left: -5px;
  width: 650px;
  color: #4f1824;
  font-family: 'AllianceEB';

  @media screen and (max-width: 884px) {
    font-size: 40px;
  }

  @media screen and (max-width: 600px) {
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
    font-size: 32px;
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  font-size: 18px;
  margin-bottom: 30px;
  line-height: 25px;
  font-family: 'AllianceM';
  margin-left: -5px;

  @media screen and (max-width: 428px) {
    font-size: 16px;
    text-align: justify;
    margin-left: 0px;
  }
`;

export const ImgWrapper = styled.div<ImgWrapperProps>`
  max-width: 555px;
  display: flex;
  margin-top: -50px;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
  margin-right: -100px;
  border: 0;
  max-width: 130%;
  max-height: 530px;

  @media screen and (max-width: 1024px) {
    margin: -50px;
    max-width: 110%;
  }

  @media screen and (max-width: 980px) {
    margin: 0px;
  }

  @media screen and (max-width: 884px) {
    margin: -60px;
  }

  @media screen and (max-width: 428px) {
    margin: 0px;
  }
`;

export const Button = styled.button<ButttonProps>`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#4b9ed9' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '16px 45px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '17px' : '12px')};
  outline: none;
  font-family: 'AllianceM';
  font-weight: bold;
  margin-left: ${({ left }) => (left ? '-70px' : '-3px')};
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#FF7D2A' : '#4B59F7')};
  }
  @media screen and (max-width: 868px) {
    width: 100%;
    margin-left: 0px !important;
  }
`;

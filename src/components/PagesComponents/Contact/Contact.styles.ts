import styled from '@emotion/styled';
import { colours } from 'config/Colours.styles';

type ImgWrapperProps = {
  start: string;
};

type ButttonProps = {
  color?: string;
  hover?: string;
  fontBig: boolean;
  big: boolean;
  left?: boolean;
};

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

export const TextWrapper = styled.div`
  padding-top: 0;
  max-width: 100%;
  margin-left: -24px;

  @media screen and (max-width: 1024px) {
    margin-left: --15px;
  }

  @media screen and (max-width: 980px) {
    padding-bottom: 65px;
    margin-left: 5px;
  }

  @media screen and (max-width: 834px) {
    margin-left: 0px;
  }
`;

export const HeadingOne = styled.h1`
  font-size: 45px;
  line-height: 1.1;
  margin-left: -6px;
  margin-bottom: 10px;
  width: 650px;
  color: #4f1824;
  font-family: 'AllianceEB';

  @media screen and (max-width: 884px) {
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

export const Subtitle = styled.p`
  max-width: 520px;
  font-size: 18px;
  line-height: 25px;
  font-family: 'AllianceM';
  margin: 0px -5px 10px;

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

export const Form = styled.form``;

export const InputForm = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background-color: ${colours.sweetbrown};
  color: ${colours.white};
  font-weight: bold;
  font-family: 'AllianceM';
  margin: 10px -5px 20px;
  font-size: 15px;
  padding: 16px;
  border-radius: 5px;

  &::placeholder {
    color: ${colours.white};
  }

  @media screen and (max-width: 884px) {
    margin: 20px 0px;
  }
`;

export const MessageForm = styled.textarea`
  width: 100%;
  height: 150px;
  outline: none;
  border: none;
  background-color: ${colours.sweetbrown};
  color: ${colours.white};
  font-weight: bold;
  font-family: 'AllianceM';
  font-size: 15px;
  margin: 5px -5px;
  padding: 16px;
  border-radius: 5px;

  &::placeholder {
    color: ${colours.white};
  }

  @media screen and (max-width: 884px) {
    margin: 5px 0px;
  }
`;

export const ImgWrapper = styled.div<ImgWrapperProps>`
  max-width: 555px;
  display: flex;
  margin-top: -10px;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
  margin-right: -120px;
  border: 0;
  max-width: 130%;
  max-height: 530px;

  @media screen and (max-width: 1024px) {
    margin-right: -50px;
    max-width: 110%;
  }

  @media screen and (max-width: 980px) {
    margin-right: -30px;
  }

  @media screen and (max-width: 884px) {
    margin-right: 0px;
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
  margin-top: 15px;
  background: ${(props) => props.color};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '15px 45px' : '10px 20px')};
  text-align: center;
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '17px' : '12px')};
  outline: none;
  font-family: 'AllianceM';
  font-weight: bold;
  margin-left: ${({ left }) => (left ? '-70px' : '-5px')};
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

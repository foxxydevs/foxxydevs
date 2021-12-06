import styled from '@emotion/styled';

export const WrapperColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 20px;
  padding-left: 25px;
  flex: 1;
  max-width: 50%;

  @media screen and (max-width: 868px) {
    max-width: 100%;
    width: 100%;
    flex: none;
  }
`;

export const TextWrapper = styled.div`
  margin-top: -170px;
  max-width: 100%;

  @media screen and (max-width: 980px) {
    padding-bottom: 20px;
    margin-left: 5px;
  }

  @media screen and (max-width: 884px) {
    margin: 0px;
  }
`;

export const HeadingOne = styled.h1`
  font-size: 45px;
  line-height: 1.1;
  margin-left: 18px;
  margin-bottom: 10px;
  width: 450px;
  color: #4f1824;
  font-family: 'AllianceEB';

  @media screen and (max-width: 1024px) {
    margin-left: -5px;
  }

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
  margin-top: 0px;
  margin-left: 20px;

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

  @media screen and (max-width: 320px) {
    text-align: center;
  }
`;

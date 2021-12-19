import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin: auto;
  max-width: 600px;
`;

export const Img = styled.img`
  width: 100%;
`;

export const HeadingWrapper = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  font-family: 'AllianceM';
  margin: 20px 0px;
  text-align: center;
  font-weight: bold;
  width: 600px;

  @media screen and (max-width: 320px) {
    font-size: 25px;
  }
`;

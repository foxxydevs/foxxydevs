import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { colours } from 'config/Colours.styles';

export const Footer = styled.footer`
  padding: 4.5rem 0 2.5rem;
  background-color: ${colours.carchoal};
  border-radius: 30px 30px 0px 0px;
  color: #000;
  margin-top: 120px;

  @media screen and (max-width: 600px) {
    margin-top: 30px;
  }
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

export const FooterSec = styled.div`
  margin-left: -24px;
  display: grid;
  row-gap: 5rem;
  @media screen and (max-width: 980px) {
    margin-left: 0px;
  }

  @media screen and (max-width: 428px) {
    margin-left: -5px;
  }
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  row-gap: 2rem;

  section {
    &:nth-of-type(2) {
      margin-left: 120px;
    }
    &:nth-of-type(3) {
      margin-left: 105px;
    }
    &:nth-of-type(4) {
      margin-left: 100px;
    }
  }

  @media screen and (max-width: 884px) {
    section {
      &:nth-of-type(2) {
        margin-left: 60px;
      }
      &:nth-of-type(3) {
        margin-left: 0px;
      }
      &:nth-of-type(4) {
        margin-left: 0px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    section {
      &:nth-of-type(2) {
        margin-left: 60px;
      }
      &:nth-of-type(3) {
        margin-left: 0px;
      }
      &:nth-of-type(4) {
        margin-left: 60px;
      }
    }
  }

  @media screen and (max-width: 428px) {
    section {
      &:nth-of-type(2) {
        margin-left: 0px;
      }
      &:nth-of-type(3) {
        margin-left: 0px;
      }
      &:nth-of-type(4) {
        margin-left: 0px;
      }
    }
  }
`;

export const FooterImg = styled.img`
  height: 100px;
  width: 100px;
  margin-left: -5px;
  margin-bottom: 10px;
`;

export const FooterDescription = styled.p`
  max-width: 250px;
  font-size: 16px;
  font-family: 'AllianceM';

  @media screen and (max-width: 428px) {
    font-size: 17px;
    max-width: 650px;
  }

  @media screen and (max-width: 280px) {
    font-size: 13.5px;
  }
`;

export const Social = styled.div`
  font-size: 1.5rem;
  margin-top: 15px;

  .tooltips {
    font-family: 'AllianceM' !important;
  }
`;

export const Opener = styled.a`
  cursor: pointer;
  margin-right: 15px;
  text-decoration: none;
`;

export const FooterSubtitle = styled.h3`
  font-family: 'AllianceM';
  margin-top: 20px;
  font-size: 18px;

  @media screen and (max-width: 428px) {
    font-size: 17px;
    max-width: 650px;
  }
`;

export const FooterMenu = styled.ul`
  list-style: none;
  font-family: 'AllianceM';
  margin-top: 25px;

  @media screen and (max-width: 280px) {
    font-size: 13.5px;
  }
`;

export const FooterItem = styled.li`
  margin-top: 15px;
`;

export const FooterLinks = styled(Link)`
  text-decoration: none;
  color: ${colours.black};
  font-size: 16px;

  svg {
    padding: 2px;
    margin-left: 5px;
  }

  @media screen and (max-width: 428px) {
    font-size: 17px;
    max-width: 650px;
  }
`;

export const FooterRights = styled.div`
  margin-top: 30px;
  margin-left: -2px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 428px) {
    margin-left: -8px;
  }

  @media screen and (max-width: 280px) {
    font-size: 13.5px;
  }
`;

export const FooterRightsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const FooterCopy = styled.p`
  justify-self: flex-start;
  font-family: 'AllianceM';
  display: flex;
  align-items: center;
  font-size: 16px;

  @media screen and (max-width: 428px) {
    font-size: 17px;
    max-width: 650px;
  }
`;

export const FooterRightsMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const FooterRightsItem = styled.li`
  margin-right: 20px;
`;

export const FooterRightsLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  img {
    width: 60px;
    height: 23px;
  }

  @media screen and (max-width: 428px) {
    img {
      margin-right: -20px;
    }
  }
`;

import styled from '@emotion/styled';
import React, { useState } from 'react';
import { colours } from 'config/Colours.styles';
import * as BoxIcons from 'react-icons/bi';

const AccordionWrapper = styled.div`
  max-width: 550px;
  margin-left: -30px;

  @media screen and (max-width: 980px) {
    margin-left: 0px;
  }
`;
const Article = styled.div`
  padding: 1rem 1rem;
  list-style: none;
  margin-bottom: 1rem;
  border-radius: 5px;
  background: ${colours.carchoal};
  display: flex;
  flex-direction: column;
`;

const Heading = styled.p`
  font-size: 19px;
  font-weight: bold;
  font-family: 'AllianceM';

  @media screen and (max-width: 428px) {
    font-size: 16px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background: ${colours.sweetwhite};
  border-color: transparent;
  width: 2rem;
  height: 2rem;
  display: flex;
  font-size: 25px;
  color: ${colours.pink};
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  align-self: center;
  min-width: 2rem;
`;

const Paragraph = styled.p`
  margin-top: 20px;
  font-size: 16px;
  font-family: 'AllianceM';
`;

type AccordionProps = {
  title: string;
  info: string;
};

const Accordion: React.FC<AccordionProps> = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <AccordionWrapper>
        <Article>
          <Header>
            <Heading>{props.title}</Heading>
            <Button onClick={() => setShowInfo(!showInfo)}>
              {showInfo ? <BoxIcons.BiCaretUp /> : <BoxIcons.BiCaretDown />}
            </Button>
          </Header>
          {showInfo && <Paragraph>{props.info}</Paragraph>}
        </Article>
      </AccordionWrapper>
    </>
  );
};

export default Accordion;

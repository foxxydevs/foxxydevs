/* eslint-disable @typescript-eslint/no-unused-vars */
import CustomArtboard from 'components/ArtboardComponent/CustomArtboard/CustomArtboard';
import question from './components/Constants';
import Accordion from './components/Accordion';
import {
  WrapperColumn,
  HeadingOne,
  TextWrapper,
  Subtitle,
} from './Accordions.styles';
import { useState } from 'react';

const Accordions = () => {
  const [questions, setQuestions] = useState(question);
  return (
    <>
      <CustomArtboard padding='100px 0' itemStart={true}>
        <WrapperColumn>
          <TextWrapper>
            <HeadingOne>Beberapa Q&A</HeadingOne>
            <Subtitle>
              Beberapa pertanyaan dan jawaban yang sering ditanyakan kepada kita
            </Subtitle>
          </TextWrapper>
        </WrapperColumn>
        <WrapperColumn>
          {questions.map((question) => {
            return <Accordion key={question.id} {...question} />;
          })}
        </WrapperColumn>
      </CustomArtboard>
    </>
  );
};

export default Accordions;

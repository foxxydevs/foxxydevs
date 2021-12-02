import React from 'react';
import {
  Container,
  HeadingOne,
  HeadingTwo,
  Img,
  ImgWrapper,
  Subtitle,
  Button,
  TextWrapper,
  WrapperColumn,
  WrapperRow,
  WrapperSection,
} from './ArtboardDetail.styles';

interface ArtboardProps {
  coverImage: string;
  altText: string;
  imgStarts: boolean;
  redirect: string;
  headingOne?: string;
  headingTwo?: string;
  btnText: string;
  description?: string;
  primary: boolean;
  start: string;
  isReverse?: boolean;
  haveBackground?: boolean;
}

const ArboardDetail: React.FC<ArtboardProps> = (props) => {
  const { imgStarts, primary, isReverse, haveBackground } = props;
  return (
    <>
      <WrapperSection isHaveBackground={haveBackground}>
        <Container>
          <WrapperRow imgStart={imgStarts}>
            {isReverse ? (
              <>
                <WrapperColumn>
                  <TextWrapper>
                    <HeadingOne>{props.headingOne}</HeadingOne>
                    <HeadingTwo>{props.headingTwo}</HeadingTwo>
                    <Subtitle>{props.description}</Subtitle>
                    <a target='_blank' href={props.redirect} rel='noreferrer'>
                      <Button big fontBig primary={primary}>
                        {props.btnText}
                      </Button>
                    </a>
                  </TextWrapper>
                </WrapperColumn>
                <WrapperColumn>
                  <ImgWrapper start=''>
                    <Img src={props.coverImage} alt={props.altText} />
                  </ImgWrapper>
                </WrapperColumn>
              </>
            ) : (
              <>
                <WrapperColumn>
                  <ImgWrapper start=''>
                    <Img src={props.coverImage} alt={props.altText} />
                  </ImgWrapper>
                </WrapperColumn>
                <WrapperColumn>
                  <TextWrapper>
                    <HeadingOne>{props.headingOne}</HeadingOne>
                    <HeadingTwo>{props.headingTwo}</HeadingTwo>
                    <Subtitle>{props.description}</Subtitle>
                    <a target='_blank' href={props.redirect} rel='noreferrer'>
                      <Button big fontBig primary={primary}>
                        {props.btnText}
                      </Button>
                    </a>
                  </TextWrapper>
                </WrapperColumn>
              </>
            )}
          </WrapperRow>
        </Container>
      </WrapperSection>
    </>
  );
};

export default ArboardDetail;

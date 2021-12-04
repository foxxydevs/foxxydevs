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
  btnHover: string;
  btnColor: string;
  altText: string;
  imgStarts: boolean;
  redirect: string;
  headingOne?: string;
  headingTwo?: string;
  btnText: string;
  description?: string;
  start: string;
  isReverse?: boolean;
  haveBackground?: boolean;
  padding: string;
}

const ArboardDetail: React.FC<ArtboardProps> = (props) => {
  const { imgStarts, isReverse, haveBackground, padding } = props;
  return (
    <>
      <WrapperSection isHaveBackground={haveBackground} padding={padding}>
        <Container>
          <WrapperRow imgStart={imgStarts}>
            {isReverse ? (
              <>
                <WrapperColumn>
                  <TextWrapper isReverse>
                    <HeadingOne isReverse>{props.headingOne}</HeadingOne>
                    <HeadingTwo isReverse>{props.headingTwo}</HeadingTwo>
                    <Subtitle>{props.description}</Subtitle>
                    <a target='_blank' href={props.redirect} rel='noreferrer'>
                      <Button
                        big
                        fontBig
                        color={props.btnColor}
                        hover={props.btnHover}
                      >
                        {props.btnText}
                      </Button>
                    </a>
                  </TextWrapper>
                </WrapperColumn>
                <WrapperColumn>
                  <ImgWrapper start=''>
                    <Img src={props.coverImage} alt={props.altText} isReverse />
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
                      <Button
                        big
                        fontBig
                        color={props.btnColor}
                        hover={props.btnHover}
                      >
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

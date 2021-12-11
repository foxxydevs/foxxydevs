import React, { useEffect, useRef } from 'react';
import { TweenMax, TimelineLite, Power3 } from 'gsap';
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
  InnerText,
  InnerButton,
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

  let app = useRef(null);
  let images: any = useRef(null);
  let content: any = useRef(null);
  let tl = new TimelineLite();

  useEffect(() => {
    //Image variable
    const imageOneChild = images.firstElementChild;

    //Content variable
    const headLineFirst = content.firstElementChild;
    const ButtonElement = content.lastElementChild;

    TweenMax.to(app, 0, {
      css: { visibility: 'visible' },
    });

    //Image animation
    tl.from(imageOneChild, 1.5, { y: 500, ease: Power3.easeOut });

    //Content animation
    tl.staggerFrom(headLineFirst, 1, {
      y: 5,
      height: '5px',
      ease: Power3.easeOut,
      delay: 0.2,
    });

    tl.staggerFrom(ButtonElement, 1, {
      x: 1,
      width: '1px',
      ease: Power3.easeInOut,
      delay: 0.2,
    });
  });

  return (
    <>
      <WrapperSection
        isHaveBackground={haveBackground}
        padding={padding}
        ref={(el: any) => (app = el)}
      >
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
                        isReverse
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
                  <ImgWrapper start='' ref={(node: any) => (images = node)}>
                    <Img src={props.coverImage} alt={props.altText} />
                  </ImgWrapper>
                </WrapperColumn>
                <WrapperColumn>
                  <TextWrapper ref={(el: any) => (content = el)}>
                    <InnerText>
                      <HeadingOne>{props.headingOne}</HeadingOne>
                      <HeadingTwo>{props.headingTwo}</HeadingTwo>
                      <Subtitle>{props.description}</Subtitle>
                    </InnerText>
                    <InnerButton>
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
                    </InnerButton>
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

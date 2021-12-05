import React from 'react';
import { WrapperSection, Container, WrapperRow } from './CustomArtboard.styles';

type CustomArtboardProps = {
  padding: string;
  haveBackground?: boolean;
  itemStart: boolean;
  children: React.ReactNode;
};

const CustomArtboard: React.FC<CustomArtboardProps> = (props) => {
  const { padding, haveBackground, itemStart } = props;
  return (
    <>
      <WrapperSection padding={padding} isHaveBackground={haveBackground}>
        <Container>
          <WrapperRow itemStart={itemStart}>{props.children}</WrapperRow>
        </Container>
      </WrapperSection>
    </>
  );
};

export default CustomArtboard;

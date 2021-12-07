import CustomArtboard from 'components/ArtboardComponent/CustomArtboard/CustomArtboard';
import { colours } from 'config/Colours.styles';
import {
  HeadingOne,
  Subtitle,
  TextWrapper,
  WrapperColumn,
  ImgWrapper,
  Img,
  InputForm,
  Form,
  MessageForm,
  Button,
} from './Contact.styles';

type ContactProps = {
  start?: string;
};

const Contact: React.FC<ContactProps> = () => {
  return (
    <>
      <CustomArtboard padding='50px 0' itemStart={true} haveBackground>
        <WrapperColumn>
          <ImgWrapper start=''>
            <Img src='/static/_contact.png' alt='contact_ils' />
          </ImgWrapper>
        </WrapperColumn>
        <WrapperColumn>
          <TextWrapper>
            <HeadingOne>Kontak Bantuan</HeadingOne>
            <Subtitle>Kamu punya pesan untuk kita? Kuy buat</Subtitle>
            <Form>
              <InputForm
                placeholder='Siapa namamu atau apa emailmu?'
                type='email'
              />
              <MessageForm placeholder='Apa pesan kamu?' />
              <Button
                big
                fontBig
                color={`${colours.pink}`}
                hover={`${colours.orange}`}
              >
                Kirim Pesan🚀
              </Button>
            </Form>
          </TextWrapper>
        </WrapperColumn>
      </CustomArtboard>
    </>
  );
};

export default Contact;

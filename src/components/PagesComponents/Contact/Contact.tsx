import CustomArtboard from 'components/ArtboardComponent/CustomArtboard/CustomArtboard';
import emailjs from 'emailjs-com';
import { colours } from 'config/Colours.styles';
import {
  HeadingOne,
  Message,
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
import { useState } from 'react';

type ContactProps = {
  start?: string;
};

const Contact: React.FC<ContactProps> = () => {
  const [statusMessage, setStatusMessage] = useState(false);

  function sendEmail(e: any) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_h158xz4',
        'template_quvs9ke',
        e.target,
        'user_sMW3i3hzttknWgI9scTXX'
      )
      .then((res) => {
        setStatusMessage(true);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

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
            {statusMessage ? (
              <Message>🥳 Selamat! Pesan berhasil terkirim</Message>
            ) : (
              <div></div>
            )}

            <HeadingOne>Kontak Bantuan</HeadingOne>
            <Subtitle>Kamu punya pesan untuk kita? Kuy buat</Subtitle>
            <Form onSubmit={sendEmail}>
              <InputForm
                placeholder='Siapa namamu atau apa emailmu?'
                type='name'
                name='username'
                required
              />
              <MessageForm
                placeholder='Apa pesan kamu?'
                typeof='message'
                name='message'
                required
              />
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

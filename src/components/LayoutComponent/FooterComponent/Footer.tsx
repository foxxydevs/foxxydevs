import {
  Footer,
  Container,
  FooterContent,
  FooterDescription,
  FooterSec,
  FooterImg,
  Social,
  Opener,
  FooterSubtitle,
  FooterMenu,
  FooterItem,
  FooterLinks,
  FooterRights,
  FooterRightsContainer,
  FooterCopy,
  FooterRightsMenu,
  FooterRightsItem,
  FooterRightsLink,
} from './Footer.styles';

import {
  RiGithubFill,
  RiStackOverflowLine,
  RiDiscordFill,
  RiShareBoxLine,
  RiTwitterFill,
} from 'react-icons/ri';

const Footers = () => {
  return (
    <>
      <Footer>
        <Container>
          <FooterSec>
            <FooterContent>
              <section>
                <FooterImg src='/static/foxxydevs.png' />
                <FooterDescription>
                  Organisasi yang membantu kita untuk belajar dalam opensource.
                </FooterDescription>
                <Social>
                  <Opener
                    href={'//www.facebook.com'}
                    target='_blank'
                    aria-label='facebook'
                    rel='noopener noreferrer'
                  >
                    <RiGithubFill style={{ color: '#000' }} />
                  </Opener>
                  <Opener
                    href={'//www.facebook.com'}
                    target='_blank'
                    aria-label='facebook'
                    rel='noopener noreferrer'
                  >
                    <RiStackOverflowLine style={{ color: '#FFA500' }} />
                  </Opener>
                  <Opener
                    href={'//www.facebook.com'}
                    target='_blank'
                    aria-label='facebook'
                    rel='noopener noreferrer'
                  >
                    <RiTwitterFill style={{ color: '#3DB2FF' }} />
                  </Opener>
                  <Opener
                    href={'//www.facebook.com'}
                    target='_blank'
                    aria-label='facebook'
                    rel='noopener noreferrer'
                  >
                    <RiDiscordFill style={{ color: '#4137bd' }} />
                  </Opener>
                </Social>
              </section>

              <section>
                <FooterSubtitle>Foxxydevs</FooterSubtitle>
                <FooterMenu>
                  <FooterItem>
                    <FooterLinks to='/#about'>
                      Tentang
                      <RiShareBoxLine />
                    </FooterLinks>
                  </FooterItem>
                  <FooterItem>
                    <FooterLinks to='/#about'>
                      Kontak
                      <RiShareBoxLine />
                    </FooterLinks>
                  </FooterItem>
                  <FooterItem>
                    <FooterLinks to='/#about'>Tech Stack</FooterLinks>
                  </FooterItem>
                </FooterMenu>
              </section>

              <section>
                <FooterSubtitle>Support</FooterSubtitle>
                <FooterMenu>
                  <FooterItem>
                    <FooterLinks to='/#about'>
                      Kontributor
                      <RiShareBoxLine />
                    </FooterLinks>
                  </FooterItem>
                  <FooterItem>
                    <FooterLinks to='/#about'>
                      Komunitas
                      <RiShareBoxLine />
                    </FooterLinks>
                  </FooterItem>
                  <FooterItem>
                    <FooterLinks to='/#about'>
                      Blog
                      <RiShareBoxLine />
                    </FooterLinks>
                  </FooterItem>
                </FooterMenu>
              </section>

              <section>
                <FooterSubtitle>Bantuan</FooterSubtitle>
                <FooterMenu>
                  <FooterItem>
                    <FooterLinks to='/#about'>
                      Mulai Belajar
                      <RiShareBoxLine />
                    </FooterLinks>
                  </FooterItem>
                  <FooterItem>
                    <FooterLinks to='/#about'>
                      Berkontribusi
                      <RiShareBoxLine />
                    </FooterLinks>
                  </FooterItem>
                  <FooterItem>
                    <FooterLinks to='/#about'>Code of conduct</FooterLinks>
                  </FooterItem>
                </FooterMenu>
              </section>
            </FooterContent>
          </FooterSec>
        </Container>
        <FooterRights>
          <FooterRightsContainer>
            <FooterCopy>Copyright © 2021 Foxxydevs</FooterCopy>
            <FooterRightsMenu>
              <FooterRightsItem>
                <FooterRightsLink to='/'>
                  <img src='/static/ccsa.png' alt='ccsa' />
                </FooterRightsLink>
              </FooterRightsItem>
            </FooterRightsMenu>
          </FooterRightsContainer>
        </FooterRights>
      </Footer>
    </>
  );
};

export default Footers;

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
  RiShareBoxLine,
  RiTwitterFill,
  RiSlackFill,
} from 'react-icons/ri';

import ReactTooltip from 'react-tooltip';

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
                    <RiGithubFill
                      data-tip='Github'
                      data-place='bottom'
                      style={{ color: '#000' }}
                    />
                  </Opener>
                  <Opener
                    href={'//www.facebook.com'}
                    target='_blank'
                    aria-label='facebook'
                    rel='noopener noreferrer'
                  >
                    <RiStackOverflowLine
                      data-tip='Stack Overflow'
                      data-place='bottom'
                      style={{ color: '#FFA500' }}
                    />
                  </Opener>
                  <Opener
                    href={'//www.facebook.com'}
                    target='_blank'
                    aria-label='facebook'
                    rel='noopener noreferrer'
                  >
                    <RiTwitterFill
                      data-tip='Twitter'
                      data-place='bottom'
                      style={{ color: '#3DB2FF' }}
                    />
                  </Opener>
                  <Opener
                    href={'//www.facebook.com'}
                    target='_blank'
                    aria-label='facebook'
                    rel='noopener noreferrer'
                  >
                    <RiSlackFill
                      data-tip='Slack'
                      data-place='bottom'
                      className='slack'
                      style={{ color: '#e6186d' }}
                    />
                  </Opener>
                  <ReactTooltip className='tooltips' />
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

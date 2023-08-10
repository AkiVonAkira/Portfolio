import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: var(--cyan);
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;
  text-align: center;
  font-size: 1.25em;
  padding: 2em;
`;

const FooterTitle = styled.h1`
  font-size: 2em;
  padding: 1rem;
  padding-bottom: 0;
`;

const FooterListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const FooterListItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  width: 100%;
  text-align: left;
  backdrop-filter: blur(4px);
  background: var(--cyan);
  border-radius: 1em;
  padding: 1em;
  gap: 1em;
  transition: 0.4s ease-in-out;

  &:hover {
    background-color: var(--red);
  }
`;

const FooterImg = styled.img`
  width: 2rem;
  filter: brightness(0) invert(1);
`;

const FooterLayout = () => {
  return (
    <FooterContainer>
      <FooterListContainer>
        <FooterTitle>Ilyas Kaya</FooterTitle>
        <FooterListItem>© All Right Reserved</FooterListItem>
      </FooterListContainer>
      <FooterListContainer>
        <FooterTitle>Socials:</FooterTitle>
        <FooterListItem href="https://github.com/AkiVonAkira">
          <FooterImg
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
          />
          GitHub
        </FooterListItem>
        <FooterListItem href="https://www.linkedin.com/in/ilyas-kaya-504622253/">
          <FooterImg
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
            alt="LinkedIn"
          />
          LinkedIn
        </FooterListItem>
      </FooterListContainer>
      <FooterListContainer>
        <FooterTitle>Contact:</FooterTitle>
        <FooterListItem href="mailto:ilyaskaya03@hotmail.com">
          <FooterImg
            src="./src/assets/envelope-open-icon.svg"
            alt="ilyaskaya03@hotmail.com"
          />
          ilyaskaya03@hotmail.com
        </FooterListItem>
        <FooterListItem>
          <FooterImg src="./src/assets/calling-icon.svg" alt="072 04 06 588" />
          072 04 06 588
        </FooterListItem>
      </FooterListContainer>
    </FooterContainer>
  );
};

export default FooterLayout;

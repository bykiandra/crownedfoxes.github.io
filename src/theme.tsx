import styled from 'styled-components'

const Header = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a202c;
`

const Intro = styled.div`
  max-width: 670px;
  margin: 180px 30px 150px 30px;
`

const Title = styled.h1`
  font-family: 'Work Sans', Arial, Helvetica, sans-serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 10px;
  letter-spacing: -1px;
  background: #2cd8d5;
  background: -moz-linear-gradient(
    -225deg,
    #2cd8d5 0%,
    #c5c1ff 50%,
    #ffbac3 100%
  );
  background: -webkit-linear-gradient(
    -225deg,
    #2cd8d5 0%,
    #c5c1ff 50%,
    #ffbac3 100%
  );
  background: linear-gradient(-225deg, #2cd8d5 0%, #c5c1ff 50%, #ffbac3 100%);
  color: transparent;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  -o-background-clip: text;
  -ms-background-clip: text;
  background-clip: text;
`

const Subtitle = styled(Title)`
  margin: 170px 0 70px 0;
  text-align: center;
  text-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
`

const ProjectTitle = styled.h3`
  font-family: 'Work Sans', Arial, Helvetica, sans-serif;
  margin: 10px 0 5px 0;
  padding: 0 10px;
`

const InfoTitle = styled(Title)`
  color: #1a202c;
  text-align: center;
`

const Paragraph = styled.p`
  font-size: 17px;
  line-height: 1.6;
  letter-spacing: 0.2px;
  word-spacing: -0.1px;
`

const SmallParagraph = styled(Paragraph)`
  font-family: Karla, Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0;
  margin-top: 10px;
  padding: 0 10px;
`

const FootParagraph = styled(SmallParagraph)`
  min-width: 40%;
`

const FootParagraphRight = styled(FootParagraph)`
  text-align: right;
`

const Center = styled(SmallParagraph)`
  text-align: center;
  margin-bottom: 20px;
`

const Link = styled.a`
  color: #ffffff;
  text-decoration: none;
  border-bottom: 2px solid #c5c1ff;
  :hover {
    background: #2cd8d5;
    background: -moz-linear-gradient(
      -225deg,
      #2cd8d5 0%,
      #c5c1ff 30%,
      #ffbac3 100%
    );
    background: -webkit-linear-gradient(
      -225deg,
      #2cd8d5 0%,
      #c5c1ff 30%,
      #ffbac3 100%
    );
    background: linear-gradient(-225deg, #2cd8d5 0%, #c5c1ff 30%, #ffbac3 100%);
    color: transparent;
    -moz-background-clip: text;
    -webkit-background-clip: text;
    -o-background-clip: text;
    -ms-background-clip: text;
    background-clip: text;
    border-bottom: 0;
  }
`

const ProjectLink = styled(Link)`
  margin: 0 8px;
`

const Button = styled(Link)`
  font-family: Karla, Helvetica, Arial, sans-serif;
  border: none;
  margin: 50px 0 30px 0;
  padding: 10px 12px;
  border-radius: 15px;
  background: #1a202c;
  color: #ffffff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);

  &:hover {
    background: #2cd8d5;
    background: -moz-linear-gradient(
      -225deg,
      #2cd8d5 0%,
      #c5c1ff 30%,
      #ffbac3 100%
    );
    background: -webkit-linear-gradient(
      -225deg,
      #2cd8d5 0%,
      #c5c1ff 30%,
      #ffbac3 100%
    );
    background: linear-gradient(-225deg, #2cd8d5 0%, #c5c1ff 30%, #ffbac3 100%);
    color: #1a202c;
  }
`

const ProjectCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 70px;
  margin-bottom: 100px;
`

const CardBorder = styled.div`
  width: 304px;
  padding: 2px;
  border-radius: 15px;
  background: #2cd8d5;
  background: -moz-linear-gradient(
    -225deg,
    #2cd8d5 0%,
    #c5c1ff 30%,
    #ffbac3 100%
  );
  background: -webkit-linear-gradient(
    -225deg,
    #2cd8d5 0%,
    #c5c1ff 30%,
    #ffbac3 100%
  );
  background: linear-gradient(-225deg, #2cd8d5 0%, #c5c1ff 30%, #ffbac3 100%);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  transition: margin 0.3s;

  &:hover {
    margin-top: -5px;
    margin-bottom: 5px;
    transition: margin 0.3s;
  }
`

const CardInner = styled.div`
  width: 300px;
  background: #1a202c;
  border-radius: 15px;
  padding: 2px;
`

const InfoSection = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  background: #2cd8d5;
  background: -moz-linear-gradient(
    -225deg,
    #2cd8d5 0%,
    #c5c1ff 30%,
    #ffbac3 100%
  );
  background: -webkit-linear-gradient(
    -225deg,
    #2cd8d5 0%,
    #c5c1ff 30%,
    #ffbac3 100%
  );
  background: linear-gradient(-225deg, #2cd8d5 0%, #c5c1ff 30%, #ffbac3 100%);
`

const InfoInner = styled.div`
  max-width: 660px;
  margin: 50px 30px;
  color: #1a202c;
`

const Foot = styled.div`
  background-color: #1a202c;
  padding: 50px;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-between;
`

export {
  Header,
  Intro,
  Title,
  Subtitle,
  ProjectTitle,
  InfoTitle,
  Paragraph,
  SmallParagraph,
  FootParagraph,
  FootParagraphRight,
  Link,
  ProjectLink,
  Button,
  ProjectCards,
  CardBorder,
  CardInner,
  Center,
  InfoSection,
  InfoInner,
  Foot,
}

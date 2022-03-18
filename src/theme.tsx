import styled from 'styled-components'

const teal = '#2cd8d5'
const purple = '#c5c1ff'
const pink = '#ffbac3'

const gradientBackground = `
  background: -moz-linear-gradient(
    135deg,
    ${teal} 0%,
    ${purple} 50%,
    ${pink} 100%
  );
  background: -webkit-linear-gradient(
    135deg,
    ${teal} 0%,
    ${purple} 50%,
    ${pink} 100%
  );
  background: linear-gradient(135deg, ${teal} 0%, ${purple} 50%, ${pink} 100%);
`

const gradientAnimation = `
  background-size: 600% 600%;
  -webkit-animation: GradientAnimation 5s ease infinite;
  -moz-animation: GradientAnimation 5s ease infinite;
  animation: GradientAnimation 5s ease infinite;

  @-webkit-keyframes GradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @-moz-keyframes GradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes GradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`

const Header = styled.header`
  ${gradientBackground}
  ${gradientAnimation}

  position: relative;
  width: 100%;
  // height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 40px 0 0 #fff, inset 0 -40px 0 0 #fff;
`

const Title = styled.h1`
  font-family: Bright;
  font-size: 200px;
  font-weight: 200;
  line-height: 120px;
  color: transparent;
  -webkit-text-stroke: 1px #fff;
  text-align: center;
  position: relative;

  @media (min-width: 1681px) {
    font-size: 300px;
    line-height: 190px;
  }

  @media (max-width: 800px) {
    font-size: 180px;
    line-height: 110px;
  }

  @media (max-width: 700px) {
    font-size: 150px;
    line-height: 100px;
  }

  @media (max-width: 600px) {
    font-size: 120px;
    line-height: 80px;
  }

  @media (max-width: 450px) {
    font-size: 90px;
    line-height: 60px;
  }
`

const Name = styled.span`
  font-family: 'Billion Dreams';
  font-size: 84px;
  font-weight: 200;
  color: #fff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  @media (min-width: 1681px) {
    font-size: 136px;
    top: 80px;
  }

  @media (max-width: 800px) {
    top: 45px;
  }

  @media (max-width: 700px) {
    font-size: 78px;
  }

  @media (max-width: 600px) {
    font-size: 64px;
    top: 35px;
  }

  @media (max-width: 450px) {
    font-size: 56px;
    top: 25px;
  }
`

const Section = styled.div`
  max-width: 800px;
  margin: 0 auto 20px auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`

const SectionHeading = styled.div`
  min-width: 170px;
`

const SectionTitle = styled.h3`
  ${gradientBackground}

  font-family: Bright;
  font-size: 48px;
  font-weight: 200;
  margin-top: 5px;
  margin-bottom: 0;
  text-align: right;
  color: transparent;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  -o-background-clip: text;
  -ms-background-clip: text;
  background-clip: text;

  @media (max-width: 600px) {
    text-align: center;
  }
`

const SectionContent = styled.div`
  flex-grow: 4;
  padding-top: 15px;

  @media (max-width: 800px) {
    padding-right: 30px;
  }

  @media (max-width: 600px) {
    padding: 5px 10px 0 10px;
  }
`

const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`

const SubTitle = styled.h4`
  font-family: Karla;
  font-size: 17px;
  font-weight: 600;
  color: #555;
  line-height: 18px;
  margin: 0 0 5px 0;
  border-bottom: 3px solid ${teal};
`

const ProjectLink = styled.a`
  padding-left: 10px;
  transition: color .25s;

  :nth-child(1) {
    color: ${purple};
  }

  :nth-child(2) {
    color: ${pink};
  }

  :hover {
    color: #bcbcbc;
    transition: color .25s;
  }
`

const SubText = styled.p`
  font-size: 16px;
  line-height: 22px;
  text-align: left;
  margin: 0;
  padding: 0 10px 30px 10px;
`

const Icons = styled.p`
  font-size: 40px;
  text-align: center;
  margin: 0;
  padding: 5px 10px 15px 10px;

  > * {
    margin: 0 10px 10px 10px;
  }

  @media (max-width: 450px) {
    > * {
      margin: 0 5px 10px 5px;
    }
  }
`

const Foot = styled.div`
  ${gradientBackground}
  ${gradientAnimation}

  width: 100%;
  text-align: center;
  margin-top: 30px;
  padding: 50px 0 0 0;
  box-shadow: inset 0 -40px 0 0 #fff;

  @media (max-width: 450px) {
    padding-bottom: 5px;
    box-shadow: inset 0 -70px 0 0 #fff;
  }
`

const FootLink = styled.a`
  font-size: 56px;
  margin: 20px;
  color: #fff;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.4));

  :hover {
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1));
  }

  @media (max-width: 500px) {
    font-size: 36px;
  }
`

const BottomFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  color: #888;
  margin: 50px 20px 5px 20px;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`

const MusicFoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const Logo = styled.span`
  font-size: 21px;
  margin-right: 10px;
`

export {
  Header,
  Title,
  Name,
  Section,
  SectionHeading,
  SectionTitle,
  SectionContent,
  SubHeader,
  SubTitle,
  ProjectLink,
  SubText,
  Icons,
  Foot,
  FootLink,
  BottomFooter,
  MusicFoot,
  Logo
}

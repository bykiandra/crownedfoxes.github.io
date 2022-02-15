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

const Header = styled.header`
  ${gradientBackground}

  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 40px 0 0 #fff, inset 0 -40px 0 0 #fff;
  background-size: 600% 600%;

  -webkit-animation: GradientAnimation 5s ease infinite;
  -moz-animation: GradientAnimation 5s ease infinite;
  animation: GradientAnimation 5s ease infinite;

  @-webkit-keyframes GradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes GradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes GradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
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
`

const Name = styled.span`
  font-family: 'Billion Dreams';
  font-size: 84px;
  font-weight: 200;
  color: #fff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.25);
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`

const Section = styled.div`
  text-align: center;
`

const SectionTitle = styled.h3`
  ${gradientBackground}

  font-family: Bright;
  font-size: 72px;
  font-weight: 200;
  text-align: center;
  color: transparent;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  -o-background-clip: text;
  -ms-background-clip: text;
  background-clip: text;
`

const CardDeck = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-bottom: 100px;
`

const Card = styled.div`
  width: 300px;
  position: relative;
  background-color: #fff;
  border-radius: 5px;

  ::after {
    ${gradientBackground}
    content: '';
    position: absolute;
    z-index: -1;
    top: -2px;
    left: -2px;
    width: 304px;
    height: calc(100% + 4px);
    border-radius: 8px;
    filter: none;
    transition: filter .25s;
  }

  :hover::after {
    filter: blur(3px);
    transition: filter .25s;
  }
`

const ProjectImage = styled.img`
  border-radius: 5px 5px 0 0;
`

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`

const ProjectTitle = styled.h4`
  font-family: Bright;
  font-size: 30px;
  font-weight: 200;
  line-height: 16px;
  margin: 10px 0;
  border-bottom: 2px solid ${teal};
`

const ProjectLink = styled.a`
  font-size: 20px;
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

const ProjectDescription = styled.p`
  font-size: 14px;
  text-align: left;
  margin: 0;
  padding: 0 10px 10px 10px;
`

const StackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  padding: 0 10px 10px 10px;
`

const StackItem = styled.span`
  font-size: 12px;
  color: #454545;
  text-transform: lowercase;
  letter-spacing: .25px;
  background-color: #efefef;
  border: 1px solid #dedede;
  border-radius: 5px;
  padding: 1px 5px;
`

const Button = styled.a`
  color: #454545;
  text-decoration: none;
  background: #fff;
  margin: 0 auto;
  padding: 10px 12px;
  position: relative;
  border-radius: 15px;
  transition: background .25s;

  ::after {
    ${gradientBackground}
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    filter: blur(3px);
  }

  :hover {
    ${gradientBackground}
    color: #fff;
    transition: background .25s;
  }
`

export {
  Header,
  Title,
  Name,
  Section,
  SectionTitle,
  CardDeck,
  Card,
  ProjectImage,
  ProjectHeader,
  ProjectTitle,
  ProjectLink,
  ProjectDescription,
  StackList,
  StackItem,
  Button
}

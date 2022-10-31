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

// const gradientAnimation = `
//   background-size: 600% 600%;
//   -webkit-animation: GradientAnimation 5s ease infinite;
//   -moz-animation: GradientAnimation 5s ease infinite;
//   animation: GradientAnimation 5s ease infinite;

//   @-webkit-keyframes GradientAnimation {
//     0% { background-position: 0% 50%; }
//     50% { background-position: 100% 50%; }
//     100% { background-position: 0% 50%; }
//   }
//   @-moz-keyframes GradientAnimation {
//     0% { background-position: 0% 50%; }
//     50% { background-position: 100% 50%; }
//     100% { background-position: 0% 50%; }
//   }
//   @keyframes GradientAnimation {
//     0% { background-position: 0% 50%; }
//     50% { background-position: 100% 50%; }
//     100% { background-position: 0% 50%; }
//   }
// `

const Flex = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: -1;
`

const Page = styled.div`
  max-width: 800px;
  margin: 100px auto 50px auto;

  @media (max-width: 860px) {
    max-width: 80%;
    padding: 0 30px;
  }

  @media (max-width: 760px) {
    max-width: 100%;
    padding: 0 30px;
  }
`

const TopGradient = styled.div`
  ${gradientBackground}
  width: 100%;
  height: 10px;
`

const MainName = styled.h1`
  margin: 0;
  font-size: 44px;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 20px;

  & span {
    ${gradientBackground}
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (min-width: 1000px) {
    font-size: 56px;
    letter-spacing: 20px;
  }

  @media (min-width: 1400px) {
    font-size: 72px;
    letter-spacing: 20px;
  }

  @media (min-width: 1681px) {
    font-size: 96px;
    letter-spacing: 20px;
  }
`

const MiniMainName = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 10px;
  position: relative;
  top: 25px;
  left: 30px;
  width: fit-content;

  & span {
    ${gradientBackground}
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 450px) {
    font-size: 20px;
    width: 100px;
  }
`

const MainSubTitle = styled.h3`
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 12px;
  color: #949494;

  @media (min-width: 1000px) {
    font-size: 20px;
    letter-spacing: 12px;
  }

  @media (min-width: 1400px) {
    font-size: 24px;
    letter-spacing: 12px;
  }

  @media (min-width: 1681px) {
    font-size: 36px;
    letter-spacing: 20px;
  }
`

const NavPos = styled.div`
  position: absolute;
  top: 35px;
  right: 30px;
`

const PageTitle = styled.h2`
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 10px;
  margin: 0;
`

const PageTitleBar = styled.div`
  ${gradientBackground}
  width: 50px;
  height: 5px;
  margin: 5px 0 10px 0;
`

const Icons = styled.div`
  font-size: 40px;
  text-align: center;
  margin: 0;
  padding: 5px 10px 0 10px;

  > * {
    margin: 0 10px;
  }

  @media (max-width: 450px) {
    > * {
      margin: 0 5px;
    }
  }
`

export {
  Flex,
  Page,
  TopGradient,
  MainName,
  MiniMainName,
  MainSubTitle,
  NavPos,
  PageTitle,
  PageTitleBar,
  Icons
}

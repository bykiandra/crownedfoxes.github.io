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


export {
  Icons
}

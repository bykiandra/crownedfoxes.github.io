import styled from 'styled-components'

const Header = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1A202C;
`

const Intro = styled.div`
  max-width: 650px;
  margin: 200px 30px;
`

const Title = styled.h1`
  font-family: 'Work Sans', Arial, Helvetica, sans-serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 10px;
  letter-spacing: -1px;
  background: #2CD8D5;
  background: -moz-linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 50%, #FFBAC3 100%);
  background: -webkit-linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 50%, #FFBAC3 100%);
  background: linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 50%, #FFBAC3 100%);
  color: transparent;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  -o-background-clip: text;
  -ms-background-clip: text;
  background-clip: text;
`

const Subtitle = styled(Title)`
  margin: 100px 0 50px 0;
  text-align: center;
`

const Paragraph = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 17px;
  line-height: 1.6;
  letter-spacing: 0.2px;
  word-spacing: -0.1px;
`

const Link = styled.a`
  color: #FFFFFF;
  text-decoration: none;
  border-bottom: 1px solid #C5C1FF;
  transition: .3s;
  :hover {
    background: #2CD8D5;
    background: -moz-linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 30%, #FFBAC3 100%);
    background: -webkit-linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 30%, #FFBAC3 100%);
    background: linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 30%, #FFBAC3 100%);
    color: transparent;
    -moz-background-clip: text;
    -webkit-background-clip: text;
    -o-background-clip: text;
    -ms-background-clip: text;
    background-clip: text;
    border-bottom: 0;
    transition: .3s;
  }
`

export { Header, Intro, Title, Subtitle, Paragraph, Link }
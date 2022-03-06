import {
  SiGithub,
  SiTwitter,
  SiNpm,
  SiCodecademy,
  SiFrontendmentor,
} from 'react-icons/si'

import { Foot, FootLink } from '../theme'

import Music from './Music'

const Footer = () => {
  return (
    <Foot>
      <FootLink
        href='https://github.com/crownedfoxes'
        target='_blank'
        rel='noreferrer'
        title='GitHub'
      >
        <SiGithub />
      </FootLink>
      <FootLink
        href='https://twitter.com/crownedfoxes'
        target='_blank'
        rel='noreferrer'
        title='Twitter'
      >
        <SiTwitter />
      </FootLink>
      <FootLink
        href='https://npmjs.com/~crownedfoxes'
        target='_blank'
        rel='noreferrer'
        title='npm'
      >
        <SiNpm />
      </FootLink>
      <FootLink
        href='https://codecademy.com/profiles/crownedfoxes'
        target='_blank'
        rel='noreferrer'
        title='Codecademy'
      >
        <SiCodecademy />
      </FootLink>
      <FootLink
        href='https://frontendmentor.io/profile/crownedfoxes'
        target='_blank'
        rel='noreferrer'
        title='Frontend Mentor'
      >
        <SiFrontendmentor />
      </FootLink>
      <Music />
    </Foot>
  )
}

export default Footer

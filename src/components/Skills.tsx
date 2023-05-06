import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiChakraui,
  SiPhp,
  SiMysql,
  SiPython,
  // SiJava,
  SiCsharp,
  SiVisualstudiocode,
  SiVisualstudio,
  SiGithub,
  SiMariadb,
  SiNetlify,
  SiSass,
  SiStyledcomponents,
  SiVercel
} from 'react-icons/si'

import { Icons } from '../theme'

const Skills = () => {
  return (
    <>
      <Icons>
        <SiHtml5 title='HTML5' color='#E34F26' />
        <SiCss3 title='CSS3' color='#1572B6' />
        <SiJavascript title='JavaScript' color='#F7DF1E' />
        <SiTypescript title='TypeScript' color='#3178C6' />
        <SiReact title='React' color='#61DAFB' />
        <SiVuedotjs title='Vue.js' color='#4FC08D' />
      </Icons>
      <Icons>
        <SiStyledcomponents title='styled-components' color='#DB7093' />
        <SiTailwindcss title='Tailwind CSS' color='#06B6D4' />
        <SiChakraui title='Chakra UI' color='#319795' />
        <SiBootstrap title='Bootstrap' color='#7952B3' />
        <SiSass title='Sass' color='#CC6699' />
      </Icons>
      <Icons>
        <SiPhp title='PHP' color='#777BB4' />
        <SiMysql title='MySQL' color='#4479A1' />
        <SiMariadb title='MariaDB' color='#003545' />
        <SiPython title='Python' color='#3776AB' />
        {/* <SiJava title='Java' color='#007396' /> */}
        <SiCsharp title='C#' color='#239120' />
      </Icons>
      <Icons>
        <SiGithub title='GitHub' color='#181717' />
        <SiNetlify title='Netlify' color='#00C7B7' />
        <SiVercel title='Vercel' color='#000000' />
        <SiVisualstudiocode title='Visual Studio Code' color='#007ACC' />
        <SiVisualstudio title='Visual Studio' color='#5C2D91' />
      </Icons>
    </>
  )
}

export default Skills
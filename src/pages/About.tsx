import { Text } from '@mantine/core'

import Skills from '../components/Skills'
import { Page, PageTitle, PageTitleBar } from './../theme'

const About = () => {
  return (
    <Page>
      <PageTitle>About</PageTitle>
      <PageTitleBar />
      <Text my='xl'>
        Ever since I first used a computer at the age of three, I've been 
        fascinated by the digital world. It started with computer games and 
        moved into coding websites during my teenage years. It wasn't until 
        almost 10 years later that I decided to turn my hobby into a career. 
        I've been studying since, culminating in a Master of Information 
        Technology degree at the end of 2021.
      </Text>
      <Text my='xl'>
        While I've completed my academic studies, I consider myself a lifelong 
        learner. I'm always looking to try and learn something new while 
        continuing to strengthen the skills I already have. Moving forward in 
        2022, my goals are to find employment as well as become an active 
        contributor to the open-source community.
      </Text>

      <PageTitle>Skills</PageTitle>
      <PageTitleBar />
      <Skills />
    </Page>
  )
}

export default About
import {
  Section,
  SectionHeading,
  SectionTitle,
  SectionContent,
  SubText } from '../theme'

const About = () => {
  return (
    <Section>
      <SectionHeading>
        <SectionTitle>About</SectionTitle>
      </SectionHeading>
      <SectionContent>
        <SubText>
          Ever since I first used a computer at the age of three, I've been fascinated by the digital world. It started with computer games and moved into coding websites during my teenage years. It wasn't until almost 10 years later that I decided to turn my hobby into a career. I've been studying since, culminating in a Master of Information Technology degree at the end of 2021.
        </SubText>
        <SubText>
          While I've completed my academic studies, I consider myself a lifelong learner. I'm always looking to try and learn something new while continuing to strengthen the skills I already have. Moving forward in 2022, my goals are to find employment as well as become an active contributor to the open-source community.
        </SubText>
      </SectionContent>
    </Section>
  )
}

export default About
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
          Ever since I first used a computer at the age of three, I've been fascinated by the digital world. 
        </SubText>
      </SectionContent>
    </Section>
  )
}

export default About
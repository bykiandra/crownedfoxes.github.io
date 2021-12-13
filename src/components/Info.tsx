import { InfoSection, InfoInner, InfoTitle, SmallParagraph } from '../theme'

const Info = () => {
  return (
    <InfoSection>
      <InfoInner>
        <InfoTitle>About</InfoTitle>
        <SmallParagraph>
          The first time I used a computer, I was 3 years old. Ever since then I
          was hooked. I started teaching myself code when I was 14 years old,
          hacking together websites from other people's code. It wasn't until
          recently that I decided to make a career out of my hobby.
          <br />
          Over the past few years I have been studying Computer Science and
          Software Development at university, and I graduated with a Master of
          Information Technology at the end of 2021. Looking forward, my goal is
          to become a front end web developer, while continuing to work on my
          own projects on the side.
          <br />
          When I'm not coding, I enjoy playing video games, drawing, painting,
          and writing fiction.
        </SmallParagraph>
      </InfoInner>
    </InfoSection>
  )
}

export default Info

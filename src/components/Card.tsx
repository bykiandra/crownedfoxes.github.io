import {
  CardBorder,
  CardInner,
  ProjectTitle,
  SmallParagraph,
  ProjectLink,
  Center,
} from '../theme'

interface Props {
  title: string
  description: string
  demo: string
  code: string
}

const Card = ({ title, description, demo, code }: Props) => {
  return (
    <CardBorder>
      <CardInner>
        <ProjectTitle>{title}</ProjectTitle>
        <SmallParagraph>{description}</SmallParagraph>
        <Center>
          <ProjectLink href={demo} target='_blank' rel='noreferrer'>
            Demo
          </ProjectLink>
          <ProjectLink href={code} target='_blank' rel='noreferrer'>
            Code
          </ProjectLink>
        </Center>
      </CardInner>
    </CardBorder>
  )
}

export default Card

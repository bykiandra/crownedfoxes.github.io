import { FiGithub, FiMonitor } from 'react-icons/fi'

import ProjectStack from './ProjectStack'

import {
  Card,
  ProjectImage,
  ProjectHeader,
  ProjectTitle,
  ProjectLink,
  ProjectDescription,
} from '../../theme'

interface Props {
  title: string
  image: string
  description: string
  demo: string
  code: string
  stack: string[]
}

const ProjectCard = ({
  title,
  image,
  description,
  demo,
  code,
  stack,
}: Props) => {
  return (
    <Card>
      <ProjectImage src={image} alt={title} />
      <ProjectHeader>
        <ProjectTitle>{title}</ProjectTitle>
        <div>
          <ProjectLink
            href={demo}
            title='Demo'
            target='_blank'
            rel='noreferrer'
          >
            <FiMonitor />
          </ProjectLink>
          <ProjectLink
            href={code}
            title='Code'
            target='_blank'
            rel='noreferrer'
          >
            <FiGithub />
          </ProjectLink>
        </div>
      </ProjectHeader>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectStack stack={stack} />
    </Card>
  )
}

export default ProjectCard

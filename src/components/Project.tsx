import { FiGithub, FiMonitor } from 'react-icons/fi'

import {
  SubHeader,
  SubTitle,
  ProjectLink,
  SubText } from '../theme'

interface Props {
  title: string,
  description: string,
  demo: string,
  code: string
}

const Project = ({ title, description, demo, code }: Props) => {
  return (
    <>
    <SubHeader>
      <SubTitle>{title}</SubTitle>
      <div>
        <ProjectLink href={demo} target='_blank' rel='noreferrer' title='Demo'><FiMonitor size='23px' /></ProjectLink>
        <ProjectLink href={code} target='_blank' rel='noreferrer' title='Code'><FiGithub size='23px' /></ProjectLink>
      </div>
    </SubHeader>
      <SubText>{description}</SubText>
    </>
  )
}

export default Project
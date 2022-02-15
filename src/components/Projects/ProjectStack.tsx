import { StackList, StackItem } from '../../theme'

interface Props {
  stack: string[]
}

const ProjectStack = ({ stack }: Props) => {
  const list = []

  for (let item of stack) {
    list.push(<StackItem>{item}</StackItem>)
  }

  return (
    <StackList>
      {list}
    </StackList>
  )
}

export default ProjectStack
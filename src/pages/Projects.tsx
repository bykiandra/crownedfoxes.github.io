import { Transition } from '@headlessui/react'

import PinkTitle from '../components/PinkTitle'

interface Props {
  isShowing: boolean
}

const Projects = ({ isShowing }: Props) => {
  return (
    <Transition
      appear={true}
      show={isShowing}
      enter='transition-opacity duration-1000'
      enterFrom='opacity-0'
      enterTo='opacity-100'
    >
      <h1 className='font-display text-5xl mb-2'>
        <PinkTitle title='Projects' large />
      </h1>
    </Transition>
  )
}

export default Projects
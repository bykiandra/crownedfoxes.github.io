import { Transition } from '@headlessui/react'

import Hero from '../components/Hero'
import Selection from '../components/Selection'
import Toolkit from '../components/Toolkit'
import Writing from '../components/Writing'

interface Props {
  isShowing: boolean
}

const Home = ({ isShowing }: Props) => {
  return (
    <Transition
      appear={true}
      show={isShowing}
      enter='transition-opacity duration-1000'
      enterFrom='opacity-0'
      enterTo='opacity-100'
    >
      <Hero />
      <Selection />
      <Toolkit />
      <Writing />
    </Transition>
  )
}

export default Home
import { Transition } from '@headlessui/react'

import PinkTitle from '../components/PinkTitle'
import Project from '../components/Project'

import TTY from '/projects/tty.png'
import MAJ from '/projects/maj.png'
import Pokedex from '/projects/pokedex.png'
import RCG from '/projects/rcg.png'
import ToDoRedux from '/projects/todoredux.png'
import SML from '/projects/sml.png'

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
      <p>
        Here you can find some projects and small web apps I've built.
      </p>
      <div className='flex flex-col sm:flex-row gap-16 mt-16 mb-8'>
        <Project
          name='Taylored To You Golf Coaching'
          description={<>Created a website for a golf coaching business. The website is built using <strong>React</strong> and <strong>TypeScript</strong> and styled using <strong>TailwindCSS</strong>.</>}
          image={TTY}
          website='https://ttygolfcoaching.com.au'
        />
        <Project
          name='More About the Journey'
          description={<>Created a website for a local business. The website is built using <strong>React</strong> with <strong>Mantine</strong> for the base UI. I then customised the interface using <strong>Styled Components</strong>.</>}
          image={MAJ}
          website='https://moreaboutthejourney.com.au'
        />
      </div>
      <h1 className='font-display text-4xl mt-24 mb-8'>
        Smaller{' '}
        <PinkTitle title='Projects' />
      </h1>
      <div className='flex flex-col sm:flex-row flex-wrap gap-16 mt-16 mb-8'>
        <Project
          name='Pokedex'
          description={<>Created a Pokedex web app. Built using <strong>React</strong> and styled using <strong>TailwindCSS</strong>. Used <strong>Axios</strong> to fetch data from the <strong>PokeAPI</strong>.</>}
          image={Pokedex}
          code='https://github.com/crownedfoxes/pokedex'
          website='https://cf-pokedex.netlify.app/'
        />
        <Project
          name='Random Colour Generator'
          description={<>Created a very simple random colour generator web app. Created using <strong>React</strong> and <strong>Chakra UI</strong>. Created using <strong>The Color API</strong>.</>}
          image={RCG}
          code='https://github.com/crownedfoxes/random-colour-generator'
          website='https://cf-randomcolourgenerator.netlify.app/'
        />
        <Project
          name='To Do with Redux'
          description={<>Created a to do app using <strong>React</strong> and <strong>Redux</strong>. Styled using <strong>Chakra UI</strong>.</>}
          image={ToDoRedux}
          code='https://github.com/crownedfoxes/to-do-redux'
          website='https://cf-todo-redux.netlify.app/'
        />
        <Project
          name='Simple Media Library'
          description={<>Created a simple CRUD app using <strong>Vue</strong> and storing all the data in <strong>localStorage</strong>. Can be used to keep track of media items, as well as rate them and link to external sites.</>}
          image={SML}
          code='https://github.com/crownedfoxes/simple-media-library'
          website='https://simple-media-library.vercel.app/'
        />
      </div>
    </Transition>
  )
}

export default Projects
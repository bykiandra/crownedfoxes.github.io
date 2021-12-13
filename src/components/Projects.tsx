import { Subtitle, ProjectCards, Button, Center } from '../theme'

import Card from './Card'

const Projects = () => {
  return (
    <>
      <Subtitle>Featured Projects</Subtitle>
      <ProjectCards>
        <Card
          title='random-colour-generator'
          description='Generates random colours with the hex, rgb, hsl, hsv, and cmyk values.'
          demo='https://cf-randomcolourgenerator.netlify.app/'
          code='https://github.com/crownedfoxes/random-colour-generator'
        />
        <Card
          title='to-do-redux'
          description='A to do app built using React and Redux. To do items are saved to and loaded from local storage.'
          demo='https://cf-todo-redux.netlify.app/'
          code='https://github.com/crownedfoxes/to-do-redux'
        />
        <Card
          title='pokedex'
          description='A Pokédex web app built using React, Tailwind CSS, and Axios.'
          demo='https://cf-pokedex.netlify.app/'
          code='https://github.com/crownedfoxes/pokedex'
        />
      </ProjectCards>
      <Center>
        <Button
          href='https://github.com/crownedfoxes'
          target='_blank'
          rel='noreferrer'
        >
          Find more on GitHub
        </Button>
      </Center>
    </>
  )
}

export default Projects

import {
  Section,
  SectionHeading,
  SectionTitle,
  SectionContent } from '../theme'

  import Project from './Project'

const Projects = () => {
  return (
    <Section>
      <SectionHeading>
        <SectionTitle>Projects</SectionTitle>
      </SectionHeading>
      <SectionContent>
        <Project
          title='Pokédex'
          description='A simple Pokédex app built using React, Tailwind CSS, and Axios. Users can search for their favourite Pokémon and find a selection of stats, as well as an image of each Pokémon.'
          demo='https://cf-pokedex.netlify.app/'
          code='https://github.com/crownedfoxes/pokedex'
        />
        <Project
          title='Random Colour Generator'
          description='As the title suggests, this small web app generates a random colour for the user at the click of a button. The colour is displayed in the background, and is made available to easily copy for use in development or design. Available formats include hex, rgb, hsl, hsv and cmyk.'
          demo='https://cf-randomcolourgenerator.netlify.app/'
          code='https://github.com/crownedfoxes/random-colour-generator'
        />
        <Project
          title='Redux To Do App'
          description='A very basic to do app built using React and Redux. Users can add, edit, tick off and delete to do items. All data is saved in local storage. The design was kept very minimal, uisng Chakra UI components.'
          demo='https://cf-todo-redux.netlify.app/'
          code='https://github.com/crownedfoxes/to-do-redux'
        />
      </SectionContent>
    </Section>
  )
}

export default Projects
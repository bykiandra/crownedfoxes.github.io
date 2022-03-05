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
          description='A Pokédex web app built using React, Tailwind CSS, and Axios.'
          demo='https://cf-pokedex.netlify.app/'
          code='https://github.com/crownedfoxes/pokedex'
        />
        <Project
          title='Random Colour Generator'
          description='Generates random colours with the hex, rgb, hsl, hsv, and cmyk values.'
          demo='https://cf-randomcolourgenerator.netlify.app/'
          code='https://github.com/crownedfoxes/random-colour-generator'
        />
        <Project
          title='Redux To Do App'
          description='A to do app built using React and Redux. To do items are saved to and loaded from local storage.'
          demo='https://cf-todo-redux.netlify.app/'
          code='https://github.com/crownedfoxes/to-do-redux'
        />
      </SectionContent>
    </Section>
  )
}

export default Projects
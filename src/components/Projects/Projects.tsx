import { Section, SectionTitle, CardDeck, Button } from '../../theme'

import ProjectCard from './ProjectCard'

import card_pokedex from '../../assets/img/card_pokedex.png'

const Projects = () => {
  return (
    <Section>
      <SectionTitle>Projects</SectionTitle>
      <CardDeck>
        <ProjectCard
          title='Pokedex'
          image={card_pokedex}
          description='A Pokédex web app built using React, Tailwind CSS, and Axios.'
          demo='https://cf-pokedex.netlify.app/'
          code='https://github.com/crownedfoxes/pokedex'
          stack={['React', 'Typescript', 'Tailwind CSS', 'Axios']}
        />
        <ProjectCard
          title='Pokedex'
          image={card_pokedex}
          description='A Pokédex web app built using React, Tailwind CSS, and Axios.'
          demo='https://cf-pokedex.netlify.app/'
          code='https://github.com/crownedfoxes/pokedex'
          stack={['React', 'Typescript', 'Tailwind CSS', 'Axios']}
        />
        <ProjectCard
          title='Random Generator'
          image={card_pokedex}
          description='A Pokédex web app built using React, Tailwind CSS, and Axios.'
          demo='https://cf-pokedex.netlify.app/'
          code='https://github.com/crownedfoxes/pokedex'
          stack={['React', 'Typescript', 'Tailwind CSS', 'Axios']}
        />
      </CardDeck>
      <Button
        href='https://github.com/crownedfoxes'
        target='_blank'
        rel='noreferrer'
      >
        Find more on GitHub
      </Button>
    </Section>
  )
}

export default Projects
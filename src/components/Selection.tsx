import MAJ from '/projects/matj.png'
import Pokedex from '/projects/pokedex.png'
import PinkTitle from './PinkTitle'
import Project from './Project'

const Selection = () => {
  return (
    <div className='mt-24'>
      <h1 className='font-display text-4xl mb-8'>
        Selected{' '}
        <PinkTitle title='Works' />
      </h1>

      <div className='flex flex-col sm:flex-row gap-16 mb-8'>
        <Project
          name='More About the Journey'
          description={<>Created a website for a local business. The website is built using <strong>React</strong> with <strong>Mantine</strong> for the base UI. I then customised the interface using <strong>Styled Components</strong>.</>}
          image={MAJ}
          website='https://moreaboutthejourney.com.au'
        />
        <Project
          name='Pokedex'
          description={<>Created a simple Pokédex web app. The website is built using <strong>React</strong> and <strong>TypeScript</strong>, and styled using <strong>TailwindCSS</strong>. The data is sourced from the <strong>PokeAPI</strong> using <strong>Axios</strong>.</>}
          image={Pokedex}
          code='https://github.com/crownedfoxes/pokedex'
          website='https://cf-pokedex.netlify.app/'
        />
      </div>
    </div>
  )
}

export default Selection
import MAJ from '/public/projects/matj.png'
import Pokedex from '/public/projects/pokedex.png'
import PinkTitle from './PinkTitle'

const Selection = () => {
  return (
    <div className='mt-24'>
      <h1 className='font-display text-4xl mb-8'>
        Selected{' '}
        <PinkTitle title='Works' />
      </h1>

      <div className='flex flex-col sm:flex-row gap-16 mb-8'>
        <div>
          <img src={MAJ} width='350px' height='200px' alt='More About the Journey website' className='border-shadow' />
          <h1 className='font-display text-pink text-2xl mt-4'>
            More About the Journey
          </h1>
          <p className='max-w-[350px] text-sm'>
            Created a website for a local business. The website is built using <strong>React</strong> with <strong>Mantine</strong> for the base UI. I then customised the interface using <strong>Styled Components</strong>.
          </p>
          <p className='flex flex-row gap-2 mt-3'>
            <a href='https://moreaboutthejourney.com.au' target='_blank' className='project-link'>Live Website</a>
          </p>
        </div>
        <div>
          <img src={Pokedex} width='350px' height='200px' alt='Pokedex web app' className='border-shadow' />
          <h1 className='font-display text-pink text-2xl mt-4'>
            Pokedex
          </h1>
          <p className='max-w-[350px] text-sm'>
            Created a simple Pokédex web app. The website is built using <strong>React</strong> and <strong>TypeScript</strong>, and styled using <strong>TailwindCSS</strong>. The data is sourced from the <strong>PokeAPI</strong> using <strong>Axios</strong>.
          </p>
          <p className='flex flex-row gap-2 mt-3'>
            <a href='https://github.com/crownedfoxes/pokedex' target='_blank' className='project-link'>Code</a>
            <a href='https://cf-pokedex.netlify.app/' target='_blank' className='project-link'>Live Website</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Selection
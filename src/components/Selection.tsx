import TTY from '/projects/tty.png'
import MAJ from '/projects/maj.png'
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
    </div>
  )
}

export default Selection
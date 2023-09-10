import PinkTitle from './PinkTitle'

const Hero = () => {
  return (
    <div className='mt-20'>
      <h1 className='font-display text-5xl mb-2'>
        Hi, I&apos;m{' '}
        <PinkTitle title='Kiandra' large />
      </h1>
      <p className='text-sm sm:text-base font-medium max-w-[400px] sm:max-w-[450px]'>
        I&apos;m a front-end developer from Australia. I enjoy video games, music, drawing, and binge watching Netflix.
      </p>
    </div>
  )
}

export default Hero
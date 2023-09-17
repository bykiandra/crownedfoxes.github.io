import PinkTitle from './PinkTitle'

const Writing = () => {
  return (
    <div className='mt-24'>
      <h1 className='font-display text-4xl mb-2'>
        Sometimes I{' '}
        <PinkTitle title='Write' />
        {' '}Stuff
      </h1>
      <p className='text-sm sm:text-base font-medium pb-8'>
        Coming Soon
      </p>
    </div>
  )
}

export default Writing
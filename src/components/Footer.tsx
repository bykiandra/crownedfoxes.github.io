const Footer = () => {
  return (
    <div className='mt-16 sm:mt-24 text-sm sm:text-sm font-medium'>
      <div className='flex justify-center gap-4'>
        <a href='https://github.com/crownedfoxes' target='_blank' className='link'>GitHub</a>
        <a href='https://twitter.com/crownedfoxes' target='_blank' className='link'>Twitter</a>
        <a href='https://dev.to/crownedfoxes' target='_blank' className='link'>Dev.to</a>
      </div>
      <div className='text-center mt-4'>
        Made with{' '}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
          className="w-4 h-4 sm:w-5 sm:h-5 inline -mt-1 fill-pink">
          <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
        </svg>
      </div>
    </div>
  )
}

export default Footer
interface Props {
  title: string,
  large?: boolean
}

const PinkTitle = ({ title, large = false}: Props) => {
  const main = <span className='absolute top-[2px] left-[2px] text-pink-light -z-50'>{title}</span>
  const small = <span className='absolute top-[0px] left-[1px] text-pink-light -z-50'>{title}</span>

  return (
    <span className='relative pr-2'>
      <span className='text-pink outline-text'>
        {title}
      </span>
      {large ? main : small }
    </span>
  )
}

export default PinkTitle
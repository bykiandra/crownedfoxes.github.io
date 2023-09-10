import Star from '/public/star.svg'
import Menu from './Navigation'

const Header = () => {
  return (
    <header className='flex justify-between content-center h-[47px]'>
      <a href=''>
        <img src={Star} width='48px' height='47px' alt='Kiandra Codes' />
      </a>
      <Menu />
    </header>
  )
}

export default Header
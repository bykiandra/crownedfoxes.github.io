import { NavLink } from 'react-router-dom'

import Star from '/star.svg'
import Menu from './Navigation'

const Header = () => {
  return (
    <header className='flex justify-between content-center h-[47px] mb-20'>
      <NavLink to='/' className='relative'>
        <img src={Star} width='48px' height='47px' alt='Kiandra Codes' className='absolute hover:animate-ping z-10' />
        <img src={Star} width='48px' height='47px' alt='Kiandra Codes' className='relative' />
      </NavLink>
      <Menu />
    </header>
  )
}

export default Header
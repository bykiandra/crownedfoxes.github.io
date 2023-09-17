import { NavLink } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'

const Navigation = () => {
  return (
    <>
      <Menu as='nav' className='self-center font-bold z-40 md:hidden'>
        <div>
          <Menu.Button className='inline-flex w-full justify-center px-4 py-2 text-sm'>
            Menu
          </Menu.Button>
        </div>
        <Transition
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 mt-2 w-24 origin-top-right bg-blue text-pink-light text-sm z-40'>
            <div className='flex flex-col px-1 py-1'>
              <Menu.Item>
                <NavLink to='/projects' className='px-2 py-2'>
                  Projects
                </NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to='' className='px-2 py-2'>
                  Articles
                </NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to='' className='px-2 py-2'>
                  About
                </NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to='' className='px-2 py-2'>
                  Contact
                </NavLink>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      <nav className='self-center font-bold text-sm z-40 justify-between gap-12 hidden md:flex'>
        <NavLink to='/projects'>Projects</NavLink>
        <NavLink to=''>Articles</NavLink>
        <NavLink to=''>About</NavLink>
        <NavLink to=''>Contact</NavLink>
      </nav>
    </>
  )
}

export default Navigation
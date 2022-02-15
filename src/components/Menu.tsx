import styled from 'styled-components'

import { FiMenu } from 'react-icons/fi'

const Menu = () => {
  const MenuDisplay = styled.div`
    width: 40px;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 80px;
    right: 40px;

    & svg:hover {
      stroke: skyblue;
    }
  `

  const MenuList = styled.ul`
    display: none;
    position: absolute;
    top: 40px;
    right: 0;
    background-color: #fff;
    list-style-type: none;
    margin: 0;
    padding: 0;

    & li a {
      display: block;
      width: 150px;
      padding: 8px 10px;

      &:hover {
        color: #fff;
        background-color: skyblue;
      }
    }
  `

  const showMenu = () => {
    const menu = document.getElementById('menu')

    if (menu) {
      menu.style.display === 'none'
        ? (menu.style.display = 'initial')
        : (menu.style.display = 'none')
    }
  }

  return (
    <MenuDisplay onClick={showMenu}>
      <FiMenu />
      <MenuList id='menu'>
        <li><a href='https://'>One</a></li>
        <li><a href='https://'>Two</a></li>
        <li><a href='https://'>Three</a></li>
        <li><a href='https://'>Four</a></li>
      </MenuList>
    </MenuDisplay>
  )
}

export default Menu

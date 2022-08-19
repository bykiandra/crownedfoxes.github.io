import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ActionIcon, Box, Burger, Button, Menu } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { BrandGithub, BrandTwitter, Code, Home, MoodSmile } from 'tabler-icons-react'

import { NavPos } from './../theme'

const Navigation = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation'

  const matches = useMediaQuery('(min-width: 960px)')

  const MobileNav = (
    <Menu width={140} position='bottom-end' onChange={setOpened}>
      <Menu.Target>
        <ActionIcon>
          <Burger
            color='#868e96'
            size='sm'
            opened={opened}
            onClick={() => setOpened((o: any) => !o)}
            title={title}
          />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          onClick={() => setOpened((o: any) => !o)}
          component={Link}
          to='/'
          icon={<Home size={16} />}
        >
          Home
        </Menu.Item>
        <Menu.Item
          onClick={() => setOpened((o: any) => !o)}
          component={Link}
          to='/about'
          icon={<MoodSmile size={16} />}
        >
          About
        </Menu.Item>
        <Menu.Item
          onClick={() => setOpened((o: any) => !o)}
          component={Link}
          to='/projects'
          icon={<Code size={16} />}
        >
          Projects
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Find Me Online</Menu.Label>
        <Menu.Item
          component='a'
          href='https://github.com/crownedfoxes'
          target='_blank'
          icon={<BrandGithub size={16} />}
        >
          GitHub
        </Menu.Item>
        <Menu.Item
          component='a'
          href='https://twitter.com/crownedfoxes'
          target='_blank'
          icon={<BrandTwitter size={16} />}
        >
          Twitter
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )

  const FullNav = (
    <Box>
      <Button
        variant='subtle'
        radius='md'
        color='gray'
        component={Link}
        to='/'
        leftIcon={<Home size={16} />}
      >
        Home
      </Button>
      <Button
        variant='subtle'
        radius='md'
        color='gray'
        component={Link}
        to='/about'
        leftIcon={<MoodSmile size={16} />}
      >
        About
      </Button>
      <Button
        variant='subtle'
        radius='md'
        color='gray'
        component={Link}
        to='/projects'
        leftIcon={<Code size={16} />}
      >
        Projects
      </Button>
      <Button
        variant='subtle'
        radius='md'
        color='gray'
        component='a'
        href='https://github.com/crownedfoxes'
        target='_blank'
        leftIcon={<BrandGithub size={16} />}
      >
        GitHub
      </Button>
      <Button
        variant='subtle'
        radius='md'
        color='gray'
        component='a'
        href='https://twitter.com/crownedfoxes'
        target='_blank'
        leftIcon={<BrandTwitter size={16} />}
      >
        Twitter
      </Button>
    </Box>
  )

  return (
    <NavPos>
      {matches ? FullNav : MobileNav}
    </NavPos>
  )
}

export default Navigation
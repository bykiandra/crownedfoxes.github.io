import { SimpleGrid, Card, Image, Group, Button, Text, Badge } from '@mantine/core'
import { BrandGithub, Code, DeviceLaptop } from 'tabler-icons-react'

import { Page, PageTitle, PageTitleBar } from './../theme'

import Pokedex from '../assets/pokedex.png'
import RCG from '../assets/rcg.png'
import ReduxToDo from '../assets/reduxtodo.png'
import SimpleML from '../assets/simpleml.png'

const Projects = () => {
  return (
    <Page>
      <PageTitle>Projects</PageTitle>
      <PageTitleBar />
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 500, cols: 1 }]} mt='xl'>
      {/* Pokedex */}
        <Card p="lg" radius="md" withBorder>
          <Card.Section>
          <Image
            src={Pokedex}
            height={200}
            alt="Pokedex"
          />
        </Card.Section>
          <Group position="apart" mt="md" mb="xs">
            <Text size='md' weight={700}>Pokedex</Text>
            <Group>
              <Button
                variant='light'
                color='gray'
                size='xs'
                component='a'
                href='https://cf-pokedex.netlify.app/'
                target='_blank'
              >
                <DeviceLaptop size={22} strokeWidth={1.5} />
              </Button>
              <Button
                variant='light'
                color='gray'
                size='xs'
                component='a'
                href='https://github.com/crownedfoxes/pokedex'
                target='_blank'
              >
                <Code size={22} strokeWidth={1.5} />
              </Button>
            </Group>
          </Group>
          <Text size="sm" color="dimmed">
            A simple Pokédex web app. Users can search for their favourite
            Pokémon and find a selection of stats, as well as an image of
            each Pokémon.
          </Text>
          <Group sx={{ paddingTop: '15px' }}>
            <Badge color='blue.4'>React</Badge>
            <Badge color='violet.8'>Axios</Badge>
            <Badge color='gray'>API</Badge>
            <Badge color='blue.3'>Tailwind CSS</Badge>
          </Group>
        </Card>
      {/* Random Colour Generator */}
        <Card p="lg" radius="md" withBorder>
          <Card.Section>
          <Image
            src={RCG}
            height={200}
            alt="Random Colour Generator"
          />
        </Card.Section>
          <Group position="apart" mt="md" mb="xs">
            <Text size='md' weight={700}>Random Colour Generator</Text>
            <Group>
              <Button
                variant='light'
                color='gray'
                size='xs'
                component='a'
                href='https://cf-randomcolourgenerator.netlify.app/'
                target='_blank'
              >
                <DeviceLaptop size={22} strokeWidth={1.5} />
              </Button>
              <Button
                variant='light'
                color='gray'
                size='xs'
                component='a'
                href='https://github.com/crownedfoxes/random-colour-generator'
                target='_blank'
              >
                <Code size={22} strokeWidth={1.5} />
              </Button>
            </Group>
          </Group>
          <Text size="sm" color="dimmed">
            A small web app that generates a random colour in several formats
            ready to be copied for any digital project. Formats include hex,
            rgb, hsl, hsv and cmyk.
          </Text>
          <Group sx={{ paddingTop: '15px' }}>
            <Badge color='blue.4'>React</Badge>
            <Badge color='violet.8'>Axios</Badge>
            <Badge color='gray'>API</Badge>
            <Badge color='cyan.6'>Chakra UI</Badge>
          </Group>
        </Card>
      {/* To Do Redux */}
        <Card p="lg" radius="md" withBorder>
          <Card.Section>
          <Image
            src={ReduxToDo}
            height={200}
            alt="Redux To Do App"
          />
        </Card.Section>
          <Group position="apart" mt="md" mb="xs">
            <Text size='md' weight={700}>Redux To Do App</Text>
            <Group>
              <Button
                variant='light'
                color='gray'
                size='xs'
                component='a'
                href='https://cf-todo-redux.netlify.app/'
                target='_blank'
              >
                <DeviceLaptop size={22} strokeWidth={1.5} />
              </Button>
              <Button
                variant='light'
                color='gray'
                size='xs'
                component='a'
                href='https://github.com/crownedfoxes/to-do-redux'
                target='_blank'
              >
                <Code size={22} strokeWidth={1.5} />
              </Button>
            </Group>
          </Group>
          <Text size="sm" color="dimmed">
          A very basic to do app built using React and Redux. Users can add,
          edit, tick off and delete to do items. All data is saved in local
          storage.
          </Text>
          <Group sx={{ paddingTop: '15px' }}>
            <Badge color='blue.4'>React</Badge>
            <Badge color='violet.6'>Redux</Badge>
            <Badge color='cyan.6'>Chakra UI</Badge>
          </Group>
        </Card>
      {/* Simple Media Library */}
        <Card p="lg" radius="md" withBorder>
          <Card.Section>
          <Image
            src={SimpleML}
            height={200}
            alt="Simple Media Library"
          />
        </Card.Section>
          <Group position="apart" mt="md" mb="xs">
            <Text size='md' weight={700}>Simple Media Library</Text>
            <Group>
              <Button
                variant='light'
                color='gray'
                size='xs'
                component='a'
                href='https://simple-media-library.vercel.app/'
                target='_blank'
              >
                <DeviceLaptop size={22} strokeWidth={1.5} />
              </Button>
              <Button
                variant='light'
                color='gray'
                size='xs'
                component='a'
                href='https://github.com/crownedfoxes/simple-media-library'
                target='_blank'
              >
                <Code size={22} strokeWidth={1.5} />
              </Button>
            </Group>
          </Group>
          <Text size="sm" color="dimmed">
          Simple Media Library allows you to track things like books and movies. You can give your media status and ratings, storing all data in local storage.
          </Text>
          <Group sx={{ paddingTop: '15px' }}>
            <Badge color='teal.5'>Vue</Badge>
          </Group>
        </Card>
      </SimpleGrid>

      <Text align='center' mt='md'>
        <Button
        variant='subtle'
        color='gray'
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/crownedfoxes?tab=repositories"
        leftIcon={<BrandGithub size={18} />}
      >
        Find more on GitHub
      </Button>
      </Text>

    </Page>
  )
}

export default Projects
import { Flex, Text, Box, Button } from '@mantine/core'
import { BrandGithub, BrandLinkedin, BrandTwitter } from 'tabler-icons-react'
import { UCTitle } from './../theme'

const UnderConstruction = () => {
  return (
    <Flex
      direction='column'
      justify='center'
      align='center'
      w='100vw'
      h='98vh'
    >
      <UCTitle>
        Under <span>Construction</span>
      </UCTitle>
      <Text mt={20} mx='md' ta='center'>
        <strong>I've decided to change things up!</strong><br />
        Feel free to contact me through any of the following platforms while I'm moving some pixels and writing some code.
      </Text>
      <Box mt={20}>
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
          href='https://www.linkedin.com/in/kiandraginevra/'
          target='_blank'
          leftIcon={<BrandLinkedin size={16} />}
        >
          LinkedIn
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
    </Flex>
  )
}

export default UnderConstruction
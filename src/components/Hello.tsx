import { Header, Intro, Title, Paragraph, Link } from '../theme'
import './svg.css'

const Hello = () => {
  return (
    <Header>
      <Intro>
        <Title>Kiandra Ginevra</Title>
        <Paragraph>
          is a software and web developer. She is currently working on building
          web apps, hacking together her first video game, and teaching herself
          Redux and Express. You can find her work on{' '}
          <Link
            href='https://github.com/crownedfoxes'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </Link>
          , and you can follow her on{' '}
          <Link
            href='https://twitter.com/crownedfoxes'
            target='_blank'
            rel='noreferrer'
          >
            Twitter
          </Link>
          .
        </Paragraph>
      </Intro>
      <svg
        className='top'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
      >
        <polygon fill='#1A202C' points='0,0 0,100 100,0' />
      </svg>
    </Header>
  )
}

export default Hello

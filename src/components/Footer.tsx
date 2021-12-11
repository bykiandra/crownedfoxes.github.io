import { Foot, SmallParagraph, Link } from '../theme'
import './svg.css'

const Footer = () => {
  return (
    <>
      <Foot>
        <SmallParagraph>
          Built with{' '}
          <Link href='https://reactjs.org/' target='_blank' rel='noreferrer'>
            React
          </Link>{' '}
          &{' '}
          <Link
            href='https://www.typescriptlang.org/'
            target='_blank'
            rel='noreferrer'
          >
            Typescript
          </Link>
          <br />
          Find the code on{' '}
          <Link
            href='https://github.com/crownedfoxes/crownedfoxes.github.io'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </Link>
          <br />
          &copy; 2021 Kiandra Ginevra
        </SmallParagraph>
      </Foot>
    </>
  )
}

export default Footer

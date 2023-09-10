import Header from './components/Header'
import Hero from './components/Hero'
import Selection from './components/Selection'
import Toolkit from './components/Toolkit'

const App = () => {
  return (
    <div className='sm:max-w-[600px] sm:mx-auto lg:max-w-[900px]'>
      <Header />
      <Hero />
      <Selection />
      <Toolkit />
    </div>
  )
}

export default App

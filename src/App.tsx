import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Projects from './pages/Projects'

const App = () => {
  return (
    <div className='sm:max-w-[600px] sm:mx-auto lg:max-w-[900px]'>
      <Header />
      <Routes>
        <Route path='/' element={<Home isShowing={true} />} />
        <Route path='/projects' element={<Projects isShowing={true} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

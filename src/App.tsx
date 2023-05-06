import { Routes, Route, useLocation } from 'react-router-dom'

import MiniTitleName from './components/MiniTitleName'
import Navigation from './components/Navigation'

import { TopGradient } from './theme'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import UnderConstruction from './pages/UnderConstruction'

const App = () => {
  const location = useLocation().pathname

  return (
    <>
      <TopGradient />
      {/* {(location !== '/') ? <MiniTitleName /> : <></>}
      <Navigation /> */}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/' element={<UnderConstruction />} />
      </Routes>
    </>
  )
}

export default App

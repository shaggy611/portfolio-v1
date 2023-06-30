import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PortfolioContext from './context/PortfolioContext'
import MenuContext from './context/MenuContext'
import heroData from './data/data'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyle from './styles/globalStyles'

import MainLayout from './layouts/MainLayout'
import Main from './components/sections/Main'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Loader from './components/Loader'

function App() {
  const [hero, setHero] = useState({ ...heroData })
  const [menuActive, setMenuActive] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 2000)
    // setHero({ ...heroData })
  }, [])

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PortfolioContext.Provider value={hero}>
          <MenuContext.Provider value={{ menuActive, setMenuActive }}>
            <Loader loaded={loaded} />
            <Routes>
              <Route path='/' element={<MainLayout />}>
                <Route index element={<Main />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
              </Route>
            </Routes>
          </MenuContext.Provider>
        </PortfolioContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App

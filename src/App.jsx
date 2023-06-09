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

function App() {
  const [hero, setHero] = useState({ ...heroData })
  const [menuActive, setMenuActive] = useState(false)

  // useEffect(() => {
  //   setHero({ ...heroData })
  // }, [])

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PortfolioContext.Provider value={hero}>
          <MenuContext.Provider value={{ menuActive, setMenuActive }}>
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

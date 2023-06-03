import { useState, useEffect } from 'react'
import PortfolioContext from './context/PortfolioContext'
import MenuContext from './context/MenuContext'
import { heroMainData } from './data/data'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyle from './styles/globalStyles'

import Main from './components/sections/Main'
import Menu from './components/Menu'
import ButtonMenu from './components/ButtonMenu'
import Logo from './components/Logo'

function App() {
  const [hero, setHero] = useState({})
  const [menuActive, setMenuActive] = useState(false)

  console.log(menuActive)

  useEffect(() => {
    setHero({ ...heroMainData })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PortfolioContext.Provider value={{ hero }}>
        <MenuContext.Provider value={{ menuActive, setMenuActive }}>
          <Logo />
          <ButtonMenu />
          <Menu />
          <Main />
        </MenuContext.Provider>
      </PortfolioContext.Provider>
    </ThemeProvider>
  )
}

export default App

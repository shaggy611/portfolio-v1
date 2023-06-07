import { Outlet } from 'react-router-dom'
// import Menu from '../components/Menu'
// import ButtonMenu from '../components/ButtonMenu'
import Logo from '../components/Logo'
import MenuDock from '../components/MenuDock'

function MainLayout() {
  return (
    <>
      <Logo />
      <MenuDock />
      {/* <ButtonMenu /> */}
      {/* <Menu /> */}
      <Outlet />
    </>
  )
}

export default MainLayout

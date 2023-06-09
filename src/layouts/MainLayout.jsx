import { Outlet } from 'react-router-dom'
import { useRef } from 'react'
import Logo from '../components/Logo'
import MenuDock from '../components/MenuDock'
import Cursor from '../components/Cursor'

function MainLayout() {
  const ref = useRef(null)

  return (
    <div ref={ref}>
      <Logo />
      <MenuDock />
      <Cursor ref={ref} />
      <Outlet />
    </div>
  )
}

export default MainLayout

import { Outlet } from 'react-router-dom'
import { useRef } from 'react'
import MenuDock from '../components/MenuDock'
import Cursor from '../components/Cursor'
import Header from '../components/Header'

function MainLayout() {
  const ref = useRef(null)

  return (
    <div ref={ref}>
      <Cursor ref={ref} />

      <Header />
      <MenuDock />
      <Outlet />
    </div>
  )
}

export default MainLayout

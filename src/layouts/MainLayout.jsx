import { Outlet } from 'react-router-dom'
import { useRef } from 'react'
import styled from 'styled-components'
import MenuDock from '../components/MenuDock'
import Cursor from '../components/Cursor'
import Header from '../components/Header'

function MainLayout() {
  const ref = useRef(null)

  return (
    <>
      <BluredBackgroundContainer />
      <div ref={ref}>
        <Cursor ref={ref} />
        <Header />
        <MenuDock />
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout

const BluredBackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -100;
  background-color: #00000044;
  /* backdrop-filter: blur(15px); */
`

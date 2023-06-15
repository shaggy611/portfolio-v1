import { Outlet } from 'react-router-dom'
import { useRef } from 'react'
import styled from 'styled-components'
import MenuDock from '../components/MenuDock'
import Cursor from '../components/Cursor'
import Header from '../components/Header'
import Email from '../components/Email'
import Copyright from '../components/Copyright'

function MainLayout() {
  const ref = useRef(null)

  return (
    <>
      <BluredBackgroundContainer />
      <div ref={ref}>
        <Cursor ref={ref} />
        <Header />
        <MenuDock />
        <Email />
        <Copyright />
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

  &::after {
    /* background-image: radial-gradient(
        at 40% 40%,
        rgb(30, 144, 255) 0px,
        transparent 50%
      ),
      radial-gradient(at 90% 10%, rgb(255, 105, 180) 0px, transparent 50%),
      radial-gradient(at 50% 95%, rgb(0, 255, 255) 0px, transparent 50%),
      radial-gradient(at 20% 30%, rgb(50, 205, 50) 0px, transparent 50%),
      radial-gradient(at 90% 90%, rgb(255, 255, 0) 0px, transparent 50%),
      radial-gradient(at 33% 50%, rgb(255, 69, 0) 0px, transparent 50%),
      radial-gradient(at 79% 53%, rgb(128, 0, 128) 0px, transparent 50%);
    position: fixed;
    content: '';
    z-index: -1;
    width: 100%;
    height: 100%;
    filter: blur(100px) saturate(100%);
    top: 0px;
    opacity: 0.1;
    transform: translateZ(0px); */
  }
`

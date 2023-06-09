import { useState, useEffect } from 'react'
import styled from 'styled-components'

function Cursor() {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    setMouseCoords({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    // return () => {
    //   document.removeEventListener('mousemove', handleMouseMove)
    // }
  }, [])

  return (
    <StyledCursor
      className='cursorAnimated'
      style={{
        top: `${mouseCoords.y}px`,
        left: `${mouseCoords.x}px`,
      }}
      //   animate={{ rotate: 360 }}
      //   transition={{ repeat: Infinity, duration: 1, delay: 0 }}
    ></StyledCursor>
  )
}

export default Cursor

const StyledCursor = styled.div`
  /* width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 0 15px 26px 15px;
  border-color: transparent transparent #579ab1c1 transparent; */
  width: 400px;
  height: 400px;

  background: #94b49f;
  filter: blur(170px);
  position: fixed;
  transform: translate(-50%, -50%);
  /* z-index: 100; */
  border-radius: 50%;
  transition: transform 0.2s ease-out;
`

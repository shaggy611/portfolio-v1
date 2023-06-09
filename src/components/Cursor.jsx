import { forwardRef } from 'react'
import styled from 'styled-components'
import useMouse from '@react-hook/mouse-position'
import { motion } from 'framer-motion'

const Cursor = forwardRef(function Cursor(props, ref) {
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  })

  let mouseXPosition = 0
  let mouseYPosition = 0

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY
  }

  const variants = {
    default: {
      // opacity: 1,
      height: 300,
      width: 300,
      // fontSize: '16px',
      // backgroundColor: '#1e91d6',
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
  }

  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 28,
  }

  return (
    <CursorTrackingFrame>
      <StyledCursor
        variants={variants}
        animate='default'
        transition={spring}></StyledCursor>
    </CursorTrackingFrame>
  )
})

export default Cursor

const CursorTrackingFrame = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -100;
`

const StyledCursor = styled(motion.div)`
  position: fixed;
  z-index: -100;
  display: flex;
  flex-flow: row;
  align-content: center;
  justify-content: center;
  top: -12%;
  left: -8%;

  height: 400px;
  width: 400px;
  background-color: #ecb390;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(80px);
  font-size: 16px;
`

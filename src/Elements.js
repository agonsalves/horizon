import styled from 'styled-components'
import {animated} from 'react-spring'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const Horizon = styled.div`
  width: 1000px;
  height: 1000px;
  overflow: hidden;
  position: relative;
`

export const Bar = styled(animated.div)`
  background-color: white;
  width: 100%;
  position: absolute;
  bottom: 100%;
  left: 0;
`
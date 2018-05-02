import styled from 'react-emotion'

export const BackgroundImg = styled('div')`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${props => props.bgSize || 'contain'};
  background-color: ${props => props.bgColor || 'transparent'};
`

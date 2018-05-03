import styled from 'react-emotion'

export const H1 = styled('h1')`
  color: ${props => props.color || 'inherit'};
  margin: 1.45rem 0px;
  font-family: ${props => props.theme.font.fontFamily};
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 2.25rem;
  line-height: 1.1;
`
export const H2 = styled('h2')`
  color: ${props => props.color || 'inherit'};
  margin: 1.45rem 0px;
  font-family: ${props => props.theme.font.fontFamily};
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1.62671rem;
  line-height: 1.1;
`

export const PrimaryH2 = styled(H2)`
  color: ${props => props.theme.color.primary};
`

export const H3 = styled('h3')`
  color: ${props => props.color || 'inherit'};
  margin: 1.45rem 0px;
  font-family: ${props => props.theme.font.fontFamily};
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1.38316rem;
  line-height: 1.1;
`

export const H4 = styled('h4')`
  color: ${props => props.color || 'inherit'};
  margin: 1.45rem 0px;
  font-family: ${props => props.theme.font.fontFamily};
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1rem;
  line-height: 1.1;
`

export const H5 = styled('h5')`
  color: ${props => props.color || 'inherit'};
  margin: 1.45rem 0px;
  font-family: ${props => props.theme.font.fontFamily};
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 0.85028rem;
  line-height: 1.1;
`

export const H6 = styled('h6')`
  color: ${props => props.color || 'inherit'};
  margin: 1.45rem 0px;
  font-family: ${props => props.theme.font.fontFamily};
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 0.78405rem;
  line-height: 1.1;
`

export const P = styled('p')`
  font-family: ${props => props.theme.font.fontFamily};
  margin: 1.45rem 0px;
  color: ${props => props.color || props.theme.color.text || 'inherit'};
`

export const LinkP = styled(P)`
  color: ${props => props.theme.color.text};
`

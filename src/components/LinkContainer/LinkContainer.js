import styled from 'react-emotion'

const LinkContainer = styled('div') `
  min-height: 100px;
  padding: 2vh 16px;
  border-bottom: 1px solid #efefef;
  :hover {
    background-color: ${props => props.theme.color.navActive};
  }
`

export default LinkContainer

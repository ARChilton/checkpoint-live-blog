import styled from 'react-emotion'

const LinkContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: nowrap;
  min-height: 100px;
  padding: 2vh 16px;
  border-bottom: 1px solid #efefef;
  :hover {
    border-color: ${props => props.theme.color.secondary};
  }
`

export default LinkContainer

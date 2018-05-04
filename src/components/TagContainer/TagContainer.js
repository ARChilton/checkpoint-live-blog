import styled from 'react-emotion'

const TagContainer = styled('div')`
  label: TagContainer;
  background-color: ${props => props.theme.color.primary};
  color: #fff;
  padding: 4px 8px;
  margin: 8px;
  text-align: center;
  /* width: fit-content; */
  float: left;
  border-radius: 2px;
  cursor: pointer;
  :hover {
    background-color: ${props => props.theme.color.secondary};
  }
`

export default TagContainer

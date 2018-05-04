import styled from 'react-emotion'

const TagListContainer = styled('div')`
  label: TagListContainer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: ${props => props.theme.font.fontFamily};
  line-height: 1.1;
  text-rendering: optimizeLegibility;
`

export default TagListContainer

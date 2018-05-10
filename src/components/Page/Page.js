import styled from 'react-emotion'

const Page = styled('div')`
  padding: 16px;
  a {
    color: ${props => props.theme.color.primary};
  }
  h1 {
    color: #000;
    margin: 1.45rem 0px;
    font-family: Roboto, Noto, sans-serif, -apple-system, BlinkMacSystemFont,
      Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 2.25rem;
    line-height: 1.1;
  }
  h2 {
    color: #000;
    margin: 1.45rem 0px;
    font-family: Roboto, Noto, sans-serif, -apple-system, BlinkMacSystemFont,
      Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1.62671rem;
    line-height: 1.1;
  }
  h3 {
    color: #000;
    margin: 1.45rem 0px;
    font-family: Roboto, Noto, sans-serif, -apple-system, BlinkMacSystemFont,
      Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1.38316rem;
    line-height: 1.1;
  }
  h4 {
    color: #000;
    margin: 1.45rem 0px;
    font-family: Roboto, Noto, sans-serif, -apple-system, BlinkMacSystemFont,
      Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1rem;
    line-height: 1.1;
  }
  h5 {
    color: #000;
    margin: 1.45rem 0px;
    font-family: Roboto, Noto, sans-serif, -apple-system, BlinkMacSystemFont,
      Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 0.85028rem;
    line-height: 1.1;
  }
  h6 {
    color: #000;
    margin: 1.45rem 0px;
    font-family: Roboto, Noto, sans-serif, -apple-system, BlinkMacSystemFont,
      Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 0.78405rem;
    line-height: 1.1;
  }
  p,
  ul,
  ol {
    margin: 1.45rem 0px;
    font-size: 1rem;
    font-family: Roboto, Noto, sans-serif, -apple-system, BlinkMacSystemFont,
      Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue;
  }
  img {
    margin: auto;
    width: 100%;
    max-width: 100%;
  }
  .row {
    margin: 5rem 0px;
  }
`
export default Page

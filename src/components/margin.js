import styled from "styled-components"

const Margin = styled.div`
  ${props => props.theme.breakpoints.up("xs")} {
    ${props => props.txs && `margin-top: ${props.txs}px;`}
    ${props => props.bxs && `margin-bottom: ${props.bxs}px;`}
  }
  ${props => props.theme.breakpoints.up("sm")} {
    ${props => props.tsm && `margin-top: ${props.tsm}px;`}
    ${props => props.bsm && `margin-bottom: ${props.bsm}px;`}
  }
  ${props => props.theme.breakpoints.up("md")} {
    ${props => props.tmd && `margin-top: ${props.tmd}px;`}
    ${props => props.bmd && `margin-bottom: ${props.bmd}px;`}
  }
`

export default Margin

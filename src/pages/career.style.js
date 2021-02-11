import styled from "styled-components"

export const CurrentOpening = styled.div`
  margin-bottom: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${props => props.theme.breakpoints.down("xs")} {
    margin-bottom: 0;
    padding: 27px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    & div {
      width: 100% !important;
    }
  }
`

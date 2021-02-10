import styled from "styled-components"

export const ProjectsUnderNDA = styled.div`
  text-align: center;
  padding: 70px 100px 80px;
  border: 2px dashed #ffffff;
  border-radius: 9px;
  ${props => props.theme.breakpoints.down("sm")} {
    display: none;
  }
`
export const ProjectsFilter = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`

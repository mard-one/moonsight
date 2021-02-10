import styled from "styled-components"

export const Projects = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 48px;
  ${props => props.theme.breakpoints.down("sm")} {
    grid-template-columns: 1fr;
  }
`
export const ProjectsGrid = styled.div`
  display: grid;
  grid-gap: 48px 0;
  ${props => props.theme.breakpoints.down("sm")} {
    grid-gap: 20px 0;
  }
`
export const Capability = styled.div`
  margin-bottom: 32px;
  padding: 0;
  border: none;
  border-radius: 0;
  ${props => props.theme.breakpoints.down("sm")} {
    margin-bottom: 20px;
    padding: 25px;
    border: 1px solid #ffffff;
    border-radius: 8px;
  }
`
export const Clients = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  ${props => props.theme.breakpoints.down("sm")} {
    padding: 16px 0;
  }
`
export const CapabilitiesGallery = styled.div`
  position: relative;
  padding-bottom: 200px;
  ${props => props.theme.breakpoints.down("sm")} {
    padding-bottom: 100px;
  }
`
export const GalleryImg1 = styled.figure`
  position: relative;
  width: 45%;
  left: -24px;
  ${props => props.theme.breakpoints.down("sm")} {
    width: 50%;
    left: 0;
  }
  ${props => props.theme.breakpoints.down("xs")} {
    width: 220px;
  }
`
export const GalleryImg2 = styled.figure`
  position: absolute;
  top: 100px;
  width: 45%;
  left: 300px;
  right: unset;
  ${props => props.theme.breakpoints.down("sm")} {
    width: 65%;
    left: unset;
    right: 0;
  }
  ${props => props.theme.breakpoints.down("xs")} {
    width: 310px;
  }
`
export const GalleryImg3 = styled.figure`
  width: 45%;
  position: absolute;
  top: 200px;
  right: -24px;
  ${props => props.theme.breakpoints.down("sm")} {
    width: 65%;
    position: relative;
    top: 100px;
    right: unset;
  }
  ${props => props.theme.breakpoints.down("xs")} {
    width: 330px;
  }
`
export const Badge = styled.div`
  display: inline-block;
  padding: 14px 40px 14px 28px;
  background-color: white;
  color: #030303;
  border-radius: 35px;
  margin: 16px auto;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  ${props => props.theme.breakpoints.down("sm")} {
    display: none;
  }
`
export const Margin = styled.div`
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

import React from "react"

import styled from "styled-components"

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`
const IFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`

const Video = ({ videoSrcURL, videoTitle, ratio = "56.25%" }) => (
  <Container style={{ paddingTop: ratio }}>
    <IFrame
      src={videoSrcURL + "?&portrait=0&byline=0&title=0"}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </Container>
)
export default Video

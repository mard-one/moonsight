import styled from 'styled-components';

export const ImgContainer = styled.div`
  ${props => props.theme.breakpoints.down("sm")} {
    height: 300px;
  }
`;

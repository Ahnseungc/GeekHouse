import styled from "styled-components";

export const GlobalStyleBox = styled.div`
  color: ${(props) => props.theme.textColor};
  font-weight: ${(props) => props.theme.fontWeight};
  background-color: ${(props) => props.theme.bgColor};
  transition: all 0.5s;
  width: 100vw;
  height: 100vh;

  a {
    color: ${(props) => props.theme.textColor};
  }
`;

import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: ${($props) => $props.theme.bgColor};
  color: ${($props) => $props.theme.textColor};
`;

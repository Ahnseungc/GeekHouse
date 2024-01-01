import styled from "styled-components";

export const ToggleBox = styled.div`
  display: flex;
  align-items: center;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.togglerColor};
  box-shadow: ${(props) => props.theme.togglerShadow};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`;

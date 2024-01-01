import styled from "styled-components";

import { ThemeButtonProps } from "@/types/db";
import { ThemeFlag } from "@/store/theme";

export const ThemeButtonSwitch = styled.button<ThemeButtonProps>`
  width: 30px;
  height: 30px;
  position: absolute;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.theme.togglerButtonColor};
  box-shadow: ${(props) => props.theme.togglerButtonShadow};

  transform: ${(props) =>
    props.currentTheme === ThemeFlag.dark
      ? "translateX(30px)"
      : "translateX(0)"};
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
  }
`;

import React from "react";
import { ThemeButtonSwitch } from "./style";
import { ThemeFlag } from "@/store/theme";

type Props = {
  currenttheme: ThemeFlag;
};

const ThemeButton = ({ currenttheme }: Props) => {
  return <ThemeButtonSwitch currentTheme={currenttheme}></ThemeButtonSwitch>;
};

export default ThemeButton;

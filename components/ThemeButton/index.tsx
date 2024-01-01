import React from "react";

import { ThemeButtonSwitch } from "./style";
import { ThemeFlag } from "@/store/theme";

type Props = {
  currentTheme: ThemeFlag;
};

const ThemeButton = ({ currentTheme }: Props) => {
  return <ThemeButtonSwitch currentTheme={currentTheme}></ThemeButtonSwitch>;
};

export default ThemeButton;

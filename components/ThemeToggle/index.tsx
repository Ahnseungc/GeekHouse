import ThemeButton from "@/components/ThemeButton";
import { ToggleBox } from "./style";
import { useRecoilState } from "recoil";
import { ThemeFlag, currentThemeState } from "@/store/theme";
import { useCallback } from "react";

const ThemeToggle = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState(currentThemeState);
  const onChangeThemeHandler = useCallback(() => {
    if (currentTheme === ThemeFlag.dark) {
      setCurrentTheme(ThemeFlag.light);
      localStorage.setItem("dark_mode", String(ThemeFlag.light));
    } else {
      setCurrentTheme(ThemeFlag.dark);
      localStorage.setItem("dark_mode", String(ThemeFlag.dark));
    }
  }, [currentTheme]);

  return (
    <ToggleBox onClick={onChangeThemeHandler}>
      <ThemeButton currenttheme={currentTheme} />
    </ToggleBox>
  );
};

export default ThemeToggle;

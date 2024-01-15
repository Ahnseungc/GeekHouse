import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentThemeState, ThemeFlag } from "@/store/theme";
import { theme } from "@/styles/ThemeStyles";
import { MainContainer } from "@/styles/MainStyle";
import { ThemeProvider } from "styled-components";
import ThemeToggle from "@/components/ThemeToggle";
import GlobalStyle from "@/components/GlobalStyleBox";
import MonacoEditor from "@/components/MonacoEditor";
import { ChildProps } from "@/types/db";

const Home = ({ children }: ChildProps) => {
  const [currentTheme, setCurrentTheme] =
    useRecoilState<number>(currentThemeState);
  useEffect(() => {
    if (!localStorage.getItem("dark_mode")) return;
    const localTheme = Number(localStorage.getItem("dark_mode"));
    setCurrentTheme(localTheme);
  }, [setCurrentTheme]);

  return (
    <ThemeProvider
      theme={
        currentTheme === ThemeFlag.dark ? theme.darkTheme : theme.lightTheme
      }
    >
      <MainContainer>
        <ThemeToggle />
        <MonacoEditor currentTheme={currentTheme} />
        <GlobalStyle>{children}</GlobalStyle>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Home;

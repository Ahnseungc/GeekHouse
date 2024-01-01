import { useRecoilState } from "recoil";
import { currentThemeState, ThemeFlag } from "@/store/theme";
import { theme } from "@/styles/ThemeStyles";
import { MainContainer } from "@/styles/MainStyle";
import { ThemeProvider } from "styled-components";
import { ChildProps } from "@/types/db";
import GlobalStyle from "@/components/GlobalStyleBox";
import ThemeToggle from "@/components/ThemeToggle";

const Home = ({ children }: ChildProps) => {
  const [currentTheme, setCurrentTheme] = useRecoilState(currentThemeState);

  return (
    <ThemeProvider
      theme={
        currentTheme === ThemeFlag.dark ? theme.darkTheme : theme.lightTheme
      }
    >
      <MainContainer>
        <ThemeToggle />
        <GlobalStyle>{children}</GlobalStyle>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Home;

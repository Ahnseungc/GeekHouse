import { GlobalStyleBox } from "./style";
import { ChildProps } from "@/types/db";

const GlobalStyle = ({ children }: ChildProps) => {
  return <GlobalStyleBox>{children}</GlobalStyleBox>;
};

export default GlobalStyle;

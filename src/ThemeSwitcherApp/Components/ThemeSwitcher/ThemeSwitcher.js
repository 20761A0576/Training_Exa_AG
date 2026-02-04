import { useTheme } from "../../Context/ThemeContext";
import { SwitchButton } from "./ThemeSwitcher.Styled";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <SwitchButton theme={theme} onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </SwitchButton>
  );
};

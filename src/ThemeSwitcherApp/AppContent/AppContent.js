import { Container, ThemeContainer, LoginContainer } from "./AppContent.Styled";
import { LoginForm } from "../Components/LoginForm/LoginForm";
import { ThemeSwitcher } from "../Components/ThemeSwitcher/ThemeSwitcher";
import { useTheme } from "../Context/ThemeContext";

export function AppContent() {
  const { theme } = useTheme();

  return (
    <Container theme={theme}>
      <ThemeContainer><ThemeSwitcher theme={theme} /></ThemeContainer>
      <LoginContainer><LoginForm theme={theme} /></LoginContainer>
    </Container>
  );
}
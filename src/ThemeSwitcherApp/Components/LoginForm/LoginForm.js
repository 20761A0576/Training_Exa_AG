import { useCallback, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import {
  FormContainer,
  Input,
  Button,
  WelcomeContainer
} from "./LoginForm.Styled";

export const LoginForm = ({ theme }) => {
  const { state, dispatch } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = useCallback((e) => {
    e.preventDefault();
    if (username && password) {
      dispatch({ type: "LOGIN", payload: { username } });
    }
  });

  const handleLogout = useCallback(() => {
    setUsername("");
    setPassword("");
    dispatch({ type: "LOGOUT" });
  });

  if (state.user) {
    return (
      <WelcomeContainer theme={theme}>
        <p>Welcome, {state.user.username}!</p>
        <Button onClick={handleLogout}>Logout</Button>
      </WelcomeContainer>
    );
  }

  return (
    <FormContainer onSubmit={handleLogin} theme={theme}>
      <Input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        theme={theme}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        theme={theme}
      />
      <Button type="submit" theme={theme}>Login</Button>
    </FormContainer>
  );
};

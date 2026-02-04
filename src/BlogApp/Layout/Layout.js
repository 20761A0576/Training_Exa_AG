import { Outlet, Link } from "react-router-dom";
import { Header, Navbtn, Title, Nav } from "./Layout.Styled";

const Layout = () => {
  return (
    <>
      <Header>
        <Title>Blogs</Title>
        <Nav>
          <Link to="/">
            <Navbtn>Home</Navbtn>
          </Link>
          <Link to="/post">
            <Navbtn>Post</Navbtn>
          </Link>
          <Link to="/about">
            <Navbtn>About</Navbtn>
          </Link>
          <Link to="/contact">
            <Navbtn>Contact</Navbtn>
          </Link>
        </Nav>
      </Header>
      <Outlet />
    </>
  );
};

export default Layout;

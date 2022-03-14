import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Form, FormControl } from "react-bootstrap";

import HomePage from "./Pages/HomePage/HomePage";
import PostsPage from "./Pages/PostsPage/PostsPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import PostsDetail from "./Pages/PostsPage/PostsDetail";

const PATHS = {
  HOME: "/",
  POSTS: "/posts",
  LOGIN: "/login",
  PROFILE: "/profile",
};
const routes = [
  {
    path: PATHS.HOME,
    element: <HomePage />,
  },
  {
    path: PATHS.POSTS,
    element: <PostsPage />,
  },
  {
    path: PATHS.PROFILE,
    element: <ProfilePage />,
  },
  {
    path: PATHS.LOGIN,
    element: <LoginPage />,
  },
];
const App = () => {
  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="App">
      <header>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href={PATHS.HOME}>HOME</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href={PATHS.HOME}>HomePage</Nav.Link>
                <Nav.Link href={PATHS.POSTS}>PostsPage</Nav.Link>
                <Nav.Link href={PATHS.PROFILE}>ProfilePage</Nav.Link>
                
                {localStorage.getItem("token") == null && (
                  <Nav.Link to="/login">Login</Nav.Link>
                )}
                {localStorage.getItem("token")  && (
                  <Button toggle={handleLogOut}>LogOut</Button>
                )}
                {/* <NavDropdown title="Function Page" id="navbarScrollingDropdown">
                  <NavDropdown.Item href={PATHS.POKEMON}>
                    PokemonPage
                  </NavDropdown.Item>
                  <NavDropdown.Item href={PATHS.POKEMONS}>
                    PokemonSPage
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href={PATHS.LOGIN}>
                    LoginPage
                  </NavDropdown.Item>
                  <NavDropdown.Item href={PATHS.REGISTER}>
                    RegisterPage
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <header>
        <BrowserRouter>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
            <Route path="/posts/:id" element={<PostsDetail />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
};

export default App;

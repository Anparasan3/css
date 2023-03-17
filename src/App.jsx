import { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter, Link, Outlet } from "react-router-dom";
import { sleep } from "./utils/helpers";

const Home = lazy(() => import("./pages/HomePage"));
const Main = lazy(() =>
  import("./pages/Main").then((module) => {
    return { default: module.Main };
  })
);
const About = lazy(() => sleep(3000).then(() => import("./pages/about")));

function App() {
  const baseUrl = "/"; // import.meta.env.REACT_APP_BASE_URL;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const NavWrapper = () => {
  return (
    <>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/main">Main</Link>
        <Link to="/about">About</Link>
      </nav>
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </>
  );
};
export default App;

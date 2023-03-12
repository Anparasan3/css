import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  // const baseUrl = import.meta.env.REACT_APP_BASE_URL;

  return (
    <BrowserRouter style={{ height: "100vh" }}>
      <div>
        <Routes basename={baseUrl}>
          <Route element={<PrivateRoutes />}>
            {protectedRoutes.map((route, i) => {
              return (
                <Route
                  key={i}
                  path={`${baseUrl}${route.path}`}
                  exact={route.exact}
                  element={<route.component />}
                />
              );
            })}
          </Route>
          {/* {!auth && <Route exact path={`${baseUrl}`} element={<LoginPage />} />}
          {!auth && <Route exact path={`${baseUrl}/login`} element={<LoginPage />} />}
          {!auth && <Route exact path={"*"} element={<Navigate to={`${baseUrl}/login`} />} />} */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

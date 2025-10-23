import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import New from "./pages/New";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";

function App() {
  const [palettes, setPalettes] = useState([]);

  const addPalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };

  const routes = [
    {
      path: "/",
      element: <Home palettes={palettes} />,
    },
    {
      path: "/new",
      element: <New addPalette={addPalette} />,
    },
    {
      path: "/:id",
      element: <Detail palettes={palettes} />,
    },
    {
      path: "/:id/edit",
      element: <Edit palettes={palettes} />,
    },
  ];

  return (
    <>
      <NavBar />
      <h1>Palette Builder</h1>
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;

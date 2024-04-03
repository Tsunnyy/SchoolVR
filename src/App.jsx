import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { AtomVerse } from "./pages/AtomVerse";
import { BioVerse } from "./pages/BioVerse";
import { ChemVerse } from "./pages/ChemVerse";
import { GeoVerse } from "./pages/GeoVerse";
import { SpaceVerse } from "./pages/SpaceVerse";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    window.onload = () => {
      setLoader(false);
    }
  }, []);
  return (
    <>
      {loader && (
        <Loader loader={loader}/>
      )}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home />
            }
          />
          <Route
            path="/AtomVerse"
            element={
              <AtomVerse />
            }
          />
          <Route
            path="/BioVerse"
            element={
              <BioVerse />
            }
          />
          <Route
            path="/ChemVerse"
            element={
              <ChemVerse />
            }
          />
          <Route
            path="/GeoVerse"
            element={
              <GeoVerse />
            }
          />
          <Route
            path="/SpaceVerse"
            element={
              <SpaceVerse />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

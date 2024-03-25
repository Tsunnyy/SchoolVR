import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
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
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

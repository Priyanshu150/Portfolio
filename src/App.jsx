import { useEffect, useState } from "react";
import { Home, Layout } from "./utils/Router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './style/index.css'

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && (
        <div className="preloader">
          <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path id="preloaderSvg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
          </svg>

          <div className="preloader-heading">
            <div className="load-text">
              <span>L</span>
              <span>O</span>
              <span>A</span>
              <span>D</span>
              <span>I</span>
              <span>N</span>
              <span>G</span>
            </div>
          </div>
        </div>
      )}

      {!showLoader && (
        <>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <Layout>
                    <Home />
                  </Layout>
                }
              />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </>
  );
}

export default App;

import { useEffect } from "react";
import "./App.css";
import ErrorBoundary from "./components/error-boundary";
import RoutingConfig from "./routing";
import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/description.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <>
      <ErrorBoundary>
        <RoutingConfig />
      </ErrorBoundary>
    </>
  );
}

export default App;

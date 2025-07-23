import HMGLogo from "./HMGLogo";
import LoginWrapper from "./LoginWrapper";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      window.location.href = "https://hmg-leutkirch.de/iserv/";
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <HMGLogo />
      <LoginWrapper />
    </div>
  );
}

export default App;

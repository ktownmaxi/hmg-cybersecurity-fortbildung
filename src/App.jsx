import HMGLogo from "./HMGLogo";
import LoginWrapper from "./LoginWrapper";

import { useEffect } from "react";
import { db } from "./firebase"; // Pfad ggf. anpassen
import { collection, addDoc } from "firebase/firestore";

function App() {
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      window.location.href = "https://hmg-leutkirch.de/iserv/";
    }
  }, []);

  return (
    <div className="flex felx-col items-center justify-center">
      <HMGLogo />
      <LoginWrapper />
    </div>
  );
}

export default App;

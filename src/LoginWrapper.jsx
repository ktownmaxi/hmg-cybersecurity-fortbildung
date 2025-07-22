import { useEffect, useState } from "react";
import IservLogo from "./assets/iservLogo.svg";
import IServLogoWhiteMode from "./assets/IservLightMode.svg";
import Login from "./Login";

function LoginWrapper() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const matchDark = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(matchDark.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);
    matchDark.addEventListener("change", handleChange);

    return () => {
      matchDark.removeEventListener("change", handleChange);
    };
  }, []);

  return (
<div
  className="
    flex flex-col items-center justify-center 
    h-screen 
    w-[80vw]
    sm:w-[80vw]
    md:w-[75vw]
    lg:w-[100vw]
    xl:w-[40vw]
    p-4
    sm:p-8
    bg-[#ffffff] dark:bg-[#262626]
  "
>
      <img
        src={isDarkMode ? IservLogo : IServLogoWhiteMode}
        className="w-[250px] h-[120px]"
        alt="IServ Logo"
      />
      <Login />
      <div className="absolute bottom-0 text-center p-4 text-white">
        <a className="text-[#67baff]" href="https://iserv.de/">
          IServ Schulplattform
        </a>
      </div>
    </div>
  );
}

export default LoginWrapper;

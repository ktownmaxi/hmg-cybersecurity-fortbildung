import { useEffect, useState } from "react";
import IservLogo from "./assets/iservLogo.svg";
import IServLogoWhiteMode from "./assets/IservLightMode.svg";
import Login from "./Login";
import Dots from "./Dots";

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
        relative flex flex-col items-center justify-center
        flex-grow
        w-full
        p-4
        sm:p-8
        bg-[#ffffff] dark:bg-[#262626]
      "
    >
      <img
        src={isDarkMode ? IservLogo : IServLogoWhiteMode}
        className="w-[170px] h-[120px] md:w-[250px]"
        alt="IServ Logo"
      />
      <Login />

      <div className="absolute bottom-0 flex items-center gap-2 mb-12 text-[14px] text-white">
        <div className="brand-dots faa-flip-hover-parent faa-slow flex gap-1">
          <Dots />
        </div>

        <a
          className="dark:text-[#67baff] text-[#0062b3] hover:underline"
          href="https://iserv.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IServ Schulplattform
        </a>
      </div>
    </div>
  );
}

export default LoginWrapper;

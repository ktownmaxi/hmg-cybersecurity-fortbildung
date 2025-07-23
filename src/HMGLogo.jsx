import Logo from "./assets/HmgLogo.png";

function HMGLogo() {
  return (
    <div className="flex items-center justify-center w-full md:w-[215vw] h-[20vh] md:h-screen dark:bg-[#064377] bg-[#75c1fe]">
      <img src={Logo} alt="HMG Logo" className="max-h-full" />
    </div>
  );
}

export default HMGLogo;

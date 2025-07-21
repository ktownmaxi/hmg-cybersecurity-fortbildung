import IservLogo from "./assets/iservLogo.svg";
import Login from "./Login";

function LoginWrapper() {
return (
  <div className="
    flex flex-col items-center justify-center 
    h-screen 
    w-full
    sm:w-[80vw]
    md:w-[60vw]
    lg:w-[50vw]
    p-4
    sm:p-8
    bg-[#262626]
  ">
      <img src={IservLogo} className="w-[250px] h-[120px]" />
      <Login />
      <div className="absolute bottom-0 text-center p-4 text-white">
        <a className="text-[#67baff]" href="https://iserv.de/">IServ Schulplattform</a>
    </div>
    </div>
    
  );
}

export default LoginWrapper;

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-[55%] mt-8">
      <div className="flex flex-row justify-between items-baseline w-full">
        <h1 className="text-[22px] text-white">Anmeldung</h1>
        <a className="text-[#67baff] text-[14px]" href="#">
          Hilfe
        </a>
      </div>

      <form className="flex flex-col mt-2">
        <input
          type="text"
          placeholder="Account"
          className="w-full p-2 mb-4 border 
                    bg-white text-black border-gray-300
                    dark:bg-[#1a1a1a] dark:text-white dark:border-gray-600
                    focus:ring-1 focus:ring-blue-400 focus:outline-none
                    focus:shadow-[0_0_10px_#3b82f6]"
        />

        <div
          className="flex items-center w-full p-2 mb-2 border 
                bg-white text-black border-gray-300
                dark:bg-[#1a1a1a] dark:text-white dark:border-gray-600
                focus-within:ring-1 focus-within:ring-blue-400 focus-within:outline-none
                focus-within:shadow-[0_0_10px_#3b82f6]"
        >
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Passwort"
            className="bg-[#1a1a1a] text-white pr-0 w-full focus:outline-none"
          />
          <div className="h-full border-l border-gray-600 px-3 flex items-center">
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div class="flex flex-row justify-between align-items-center login-form-field">
          <div class="checkbox m0">
            <label class="flex text-[14px] align-items-center dark:text-white">
              <input
                className="mr-1"
                type="checkbox"
                id="remember_me"
                name="_remember_me"
                tabindex="1"
              />
              Angemeldet bleiben
            </label>
          </div>
          <div class="text-right">
            <a className="text-[#67baff] text-[14px]" href="#">
              Passwort vergessen?
            </a>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#67baff] text-black hover:bg-blue-600 mt-10 p-2"
        >
          → Anmelden
        </button>
      </form>
    </div>
  );
}

export default Login;

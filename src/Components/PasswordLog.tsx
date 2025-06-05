/** @format */

import React from "react";
import { useState } from "react";

function PasswordLog({ email }) {
  const [password, setPassword] = useState("");
  const handlePasswordSubmit = () => {
    console.log(
      "Password submitted for:",
      email,
      "Password:",
      password
    );
  };
  return (
    <div>
      {emailSubmitted && (
        <div className="h-40 w-90 shadow-2xl mx-auto rounded-2xl py-8 ">
          <input
            className=" border-2 text-sm h-10 w-80 rounded-lg text-center ml-5"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />
          <div
            onClick={handlePasswordSubmit}
            className="border-2 text-sm font-semibold h-10 w-80 rounded-lg mt-5 ml-5 flex justify-center items-center cursor-pointer text-white bg-red-500 hover:bg-red-400"
          >
            Login
          </div>
        </div>
      )}
    </div>
  );
}

export default PasswordLog;

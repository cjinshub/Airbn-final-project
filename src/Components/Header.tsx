/** @format */

import Imagelogo from "../assets/airbnb logo.png";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import Profile from "../assets/profile.png";
import { useNavigate } from "react-router-dom";
import SearchInput from "../Components/SearchInput";

function Header({ showSearch }) {
  const navigate = useNavigate();

  // openEmaillog
  const goToLogin = () => {
    navigate("/open");
  };
  //return to home
  const goToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex gap-76 py-5 cursor-pointer">
        <div onClick={goToHome}>
          <img src={Imagelogo} alt="logo" />
        </div>
        {showSearch && <SearchInput />}
        <div className="flex gap-2 ml-5 ">
          <p
            onClick={goToHome}
            className="font-semibold mt-3 cursor-pointer hover:text-red-400"
          >
            Airbnb your home
          </p>
          <LanguageIcon className="mt-4 cursor-pointer" />
          <div className="flex gap-4 shadow-2xl h-12 w-26 rounded-3xl justify-center items-center">
            <div onClick={goToLogin}>
              <MenuIcon className="cursor-pointer" />
            </div>

            <header>
              <div>
                <img
                  className="cursor-pointer"
                  src={Profile}
                  alt=""
                />
              </div>
            </header>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

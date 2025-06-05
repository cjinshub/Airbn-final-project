/** @format */
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const goToEmaillog = () => {
    navigate("/login");
  };
  return (
    <div className="h-100 w-80 rounded-2xl grid gap-4 p-4 shadow-2xl translate-x-[1150px] mt-10">
      <div className="hover: cursor-pointer">
        Messages
      </div>
      <div>Trips</div>
      <div>Wishlist</div>
      <hr className="w-80 translate-x-[-18px] opacity-40" />
      <div>Manage listings</div>
      <div className="hover: cursor-pointer">
        Account
      </div>
      <hr className="w-80 translate-x-[-18px] opacity-40" />
      <div className="hover: cursor-pointer">
        Help center
      </div>
      <div
        onClick={goToEmaillog}
        className="hover: cursor-pointer"
      >
        Login
      </div>
    </div>
  );
}

export default Login;

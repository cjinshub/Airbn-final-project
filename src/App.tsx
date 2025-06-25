/** @format */

import Header from "./Components/Header";
import Iconcards from "./Components/Iconcards";
import Imgcards from "./Components/Imgcards";
import Footer from "./Components/Footer";
import Emaillog from "./Pages/Emaillog";
import Login from "./Pages/Login";
import SearchInput from "./Components/SearchInput";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>
        <div className="sm:grid sm:grid-cols-1">
          <Iconcards />
        </div>
        <div>
          <Imgcards />
        </div>
        <div className="ml-26">
          <Footer />
        </div>
        <div></div>
      </div>
    </>
  );
};

function App() {
  return (
    <div className="px-10">
      <Router>
        <Header SearchInput={SearchInput} />
        <hr className="border-t opacity-30 px-20" />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/login"
            element={<Emaillog />}
          />
          <Route
            path="/Open"
            element={<Login />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

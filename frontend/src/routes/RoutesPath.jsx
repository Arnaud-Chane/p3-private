import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Test from "../pages/Test";
import NavbarUser from "../components/Navbar";
import ListAllMembers from "../pages/ListAllMembers";

function RoutesPath() {
  return (
    <div className="RoutesPath">
      <NavbarUser />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/members" element={<ListAllMembers />} />
      </Routes>
    </div>
  );
}

export default RoutesPath;

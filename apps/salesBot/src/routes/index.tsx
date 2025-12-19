import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import OtpVerification from "../pages/OtpVerification";
import CheckYourEmail from "../pages/CheckYourEmail";
import SetNewPassword from "../pages/SetNewPassword";
import Register from "../pages/Register";

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route index element={<Dashboard />} /> */}
      {/* <Route index element={<Login />} /> */}
      <Route index element={<Register />} />

      {/* <Route index element={<ForgotPassword />} /> */}
      {/* <Route index element={<OtpVerification />} /> */}
      {/* <Route index element={<CheckYourEmail />} /> */}
      {/* <Route index element={<SetNewPassword />} /> */}
    </Routes>
  );
};

export default AppRoutes;

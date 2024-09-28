import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Authentication/login";
import AdminDashboard from "./pages/Dashboard/adminDashboard";
import UserDashboard from "./pages/Dashboard/userDashboard";
import StaffDashboard from "./pages/Dashboard/staffDashboard";
import ForgotPassword from "./pages/Authentication/forgotPassword";

function App() {
  return (

      <div>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/userDashboard" element={<UserDashboard />} />
          <Route path="/staffDashboard" element={<StaffDashboard />} />
        </Routes>
      </div>
  
  );
}

export default App;

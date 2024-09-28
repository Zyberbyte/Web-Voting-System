import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Authentication/login";
import AdminDashboard from "./pages/Dashboard/adminDashboard";
import UserDashboard from "./pages/Dashboard/userDashboard";
import StaffDashboard from "./pages/Dashboard/staffDashboard";
import ForgotPassword from "./pages/Authentication/forgotPassword";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword/>}/>
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/userDashboard" element={<UserDashboard />} />
          <Route path="/staffDashboard" element={<StaffDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";

function userDashboard() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center h-[100vh]">
        <div>userDashboard</div>
        <Link to="/adminDashboard">Admin Dashboard</Link>
      </div>
    </>
  );
}

export default userDashboard;

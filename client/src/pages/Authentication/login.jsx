import React from "react";
import { Link } from "react-router-dom";
import { Logo, ProfileIcon } from "../../assets/img/image";

function login() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center h-[100vh]">
        <div className="flex flex-col items-center justify-center w-[30%]">
          <div className=" w-40 h-40 mb-5">
            <img src={Logo} alt="logo" />
          </div>
          <div className="flex flex-col items-center justify-center border-2 border-gray-500 rounded-sm w-full h-full bg-gray-300 bg-opacity-10 backdrop-filter backdrop-blur-lg">
            <div className=" w-10 h-10">
              <img src={ProfileIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;

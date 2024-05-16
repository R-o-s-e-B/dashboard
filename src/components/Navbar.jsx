import React from "react";
import logo from "../assets/temperStack.svg";

import home from "../assets/navIcons/home.svg";
import resources from "../assets/navIcons/resources.svg";
import notifications from "../assets/navIcons/notifications.svg";
import threshold from "../assets/navIcons/threshold.svg";
import profile from "../assets/navIcons/profile.svg";

const Navbar = () => {
  const constants = {
    Home: home,
    Resources: resources,
    Notifications: notifications,
    Threshold: threshold,
    temperStack: "Temperstack notifications",
    external: "External notifications",
  };

  return (
    <nav className="w-full bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10  border-b-2 border-gray-200 border-opacity-10">
      <div className="w-full p-2 py-6">
        <div className="flex justify-center items-center">
          <div className="mr-12">
            <img src={logo} alt="logo" />
          </div>

          {Object.entries(constants).map(([key, icon]) => (
            <div
              key={key}
              className="flex justify-center items-center mx-4 space-x-1 cursor-pointer"
            >
              {key !== "temperStack" && key !== "external" ? (
                <>
                  <img src={icon} alt={key} className="h-4 w-4" />
                  <p className="text-white text-sm">{key}</p>
                </>
              ) : (
                <p className="text-white text-sm">{icon}</p>
              )}
            </div>
          ))}

          <div className="flex justify-center items-center ml-12 cursor-pointer">
            <img src={profile} alt="profile" className="h-4 w-4 mr-2" />
            <p className="text-white"> Admin </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

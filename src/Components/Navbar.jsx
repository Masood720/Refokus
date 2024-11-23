import React from "react";
import logo from "../assets/logo.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center">
        <img className="w-28" src={logo} alt="" srcset="" />
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span className="w-[2px] h-7 bg-zinc-700"></span>
            ) : (
              <a
                className="font-regular text-sm flex items-center gap-1"
                href="#"
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.75em #00FF19" }}
                    className="inline-block w-1 h-1 rounded-full bg-green-500"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;

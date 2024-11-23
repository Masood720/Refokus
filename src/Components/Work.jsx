import React from "react";
import img1 from "../assets/Refokus_tools-1.png";
import img2 from "../assets/Refokus_tools-2.png";
import img3 from "../assets/Refokus_tools-3.png";
import img4 from "../assets/Refokus_tools-4.png";
import img5 from "../assets/Refokus_tools-5.png";
import img6 from "../assets/Refokus_tools-6.png";

const Work = () => {
  var images = [
    { url: img1, top: "31%", left: "42%", isActive: true },
    { url: img2, top: "35%", left: "45%", isActive: false },
    { url: img3, top: "37%", left: "48%", isActive: false },
    { url: img4, top: "42%", left: "46%", isActive: false },
    { url: img5, top: "47%", left: "40%", isActive: false },
    { url: img6, top: "52%", left: "46%", isActive: false },
  ];

  return (
    <div className="w-full">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[27vw] leading-none font-medium tracking-tight select-none">
          work
        </h1>
      </div>
      <div className="absolute top-0 w-full h-full">
        {images.map(
          (elem, index) =>
            elem.isActive && (
              <img
                className="absolute w-52 rounded-lg -transalte-x-[50%] -transalte-y-[50%]"
                src={elem.url}
                style={{ top: elem.top, left: elem.left }}
                alt=""
              />
            )
        )}
      </div>
    </div>
  );
};

export default Work;

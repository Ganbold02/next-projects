import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who A Am</h2>
          <p className="py-2 text-gray-600">
            // I am not your normal Developer
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            repellendus rerum explicabo corrupti? Obcaecati ut doloribus,
            accusamus animi doloremque possimus, accusantium alias impedit ex
            quis iste nemo asperiores fuga corrupti.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            repellendus rerum explicabo corrupti? Obcaecati ut doloribus,
            accusamus animi doloremque possimus, accusantium alias impedit ex
            quis iste nemo asperiores fuga corrupti.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latext projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in">
          <Image
            className="rounded-xl"
            src="/../public/assets/about.jpg"
            alt="/"
            width="125"
            height="50"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;

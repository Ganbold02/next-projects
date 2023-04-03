import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import Link from "next/link";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netFlixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="project" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Project
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={propertyImg}
            propertUrl="/property"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={cryptoImg}
            propertUrl="/property"
          />
          <ProjectItem
            title="Property Finder"
            backgroundImg={netFlixImg}
            propertUrl="/property"
          />
          <ProjectItem
            title="Property Finder"
            backgroundImg={twitchImg}
            propertUrl="/property"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
// import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import CV from "../../assets/BurhanMernStackResume.pdf";

const Media = () => {
  const cvUrl = CV;

  return (
    <div className=" xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        {/* <h2 className="text-base uppercase font-titleFont mb-4">Download CV</h2> */}
        <div className="flex gap-4">
          <a
            href={cvUrl}
            className="bannerIcon w-48"
            // download="BurhanMernStackResume.pdf"
            target="_blank"
          >
            <button>Download CV</button>
          </a>
          {/* 
          <button
            className="bannerIcon w-48"
            onclick={
              handleOpenCV
              // window.open("../../../public/BurhanMernStackResume.pdf")
            }
          >
            Download CV
          </button> */}
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
      {/* <div className="pt-10">
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default Media;

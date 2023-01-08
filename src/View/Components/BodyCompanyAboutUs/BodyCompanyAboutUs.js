import React from "react";
import about from "../../../Assets/About.jpg";
import "./BodyCompanyAboutUs.scss";
import CarouselAboutUs from "./components/CarouselAbout/CarouselAboutUs";

export default function BodyCompanyAboutUs() {
  return (
    <>
      <div className="row mt-4 mb-4 pt-4 pb-4 g-0">
        <div className="col-12 text-center">
          <img src={about} alt="about" className="w-50"></img>
        </div>
      </div>
      <CarouselAboutUs />
    </>
  );
}

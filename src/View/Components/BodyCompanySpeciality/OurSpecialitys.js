import React from "react";
import OurSpeciality from "../../../Assets/OurSpeciality.jpg";
import CarouselSpeciality from "./components/CarouselSpeciality";
import "./OurSpecialitys.scss";

export default function OurSpecialitys() {
  return (
    <>
      <div className="row mt-5 mb-4 pt-4 pb-4 g-0">
        <div className="col-12 mt-5 text-center">
          <img src={OurSpeciality} alt="about" className="w-50"></img>
        </div>
      </div>
      <div className="row mt-4 mb-4 p-5 g-0 blue-box">
        <div className="row background-speciality">
          <div className="row mt-4 mb-4 pt-4 g-0">
            <div className="col-md-12 text-center">
              <h1 className="title-our-values mt-3">Our Speciality</h1>
            </div>
          </div>
          <div className="row mt-4 g-0">
            <div className="offset-md-4 mt-4 mb-4 col-md-4 text-center">
              <label className="body-our-values">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                euismod libero vel leo auctor, in venenatis nulla consequat. Sed
                commodo nunc sit amet congue aliquam.
              </label>
            </div>
          </div>
          <CarouselSpeciality />
        </div>
      </div>
    </>
  );
}

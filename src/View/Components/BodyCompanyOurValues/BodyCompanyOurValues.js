import React from "react";
// import { Carousel } from "react-bootstrap";
import OurCore from "../../../Assets/OurCore.jpg";
import "./BodyCompanyOurValues.scss";
import ListOurValues from "./components/ListOurValues/ListOurValues";

export default function BodyCompanyOurValues() {
  return (
    <>
      <div className="row mt-4 mb-4 pt-4 pb-4 g-0">
        <div className="col-12 text-center">
          <img src={OurCore} alt="about" className="w-50"></img>
        </div>
      </div>
      <div className="row mt-4 mb-4 pt-4 pb-4 g-0">
        <div className="col-md-12 text-center">
          <h1 className="title-values mt-3">Our Core Values</h1>
        </div>
      </div>
      <div className="row mt-4 pt-4 g-0">
        <div className="offset-md-4 col-md-4 text-center">
          <label className="body-values mt-3">
            Ridiculus laoreet libero pretium et, sit vel elementum convallis
            fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus
            etiam sit.
          </label>
        </div>
      </div>
      <div className="row mt-4 mb-4 pt-2 pb-4 g-0">
        <div className="offset-md-4 col-md-4 text-center">
          <label className="body-values mt-3">
            In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae,
            nec amet enim.
          </label>
        </div>
      </div>
      <ListOurValues />
    </>
  );
}

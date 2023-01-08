import React from "react";
import bgCompany from "../../../Assets/background_company.svg";
import "./TitleProfile.scss";

export default function TitleProfile() {
  return (
    <div className="container-profile">
      <img src={bgCompany} alt="Map" className="w-100" />
      <div className="position-relative">
        <div className="box-container">
          <div className="box-title">
            <div className="row g-0 p-4">
              <div className="offset-md-4 col-4 text-center">
                <h1 className="title-company">Discover Your Wonder</h1>
              </div>
            </div>
            <div className="row g-0 p-4">
              <div className="offset-md-4 col-4 text-center">
                <label className="sub-company">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

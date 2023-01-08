import Header from "../Components/Header/Header";
import React, { useRef } from "react";
import TitleProfile from "../Components/TitleProfile/TitleProfile";
import BodyCompanyAboutUs from "../Components/BodyCompanyAboutUs/BodyCompanyAboutUs";
import BodyCompanyOurValues from "../Components/BodyCompanyOurValues/BodyCompanyOurValues";
import OurSpecialitys from "../Components/BodyCompanySpeciality/OurSpecialitys";

export default function Home() {
  const AboutUs = useRef(null);
  const OurCore = useRef(null);
  const OurSpeciality = useRef(null);

  return (
    <>
      <Header
        AboutUs={AboutUs}
        OurCore={OurCore}
        OurSpeciality={OurSpeciality}
      />
      <TitleProfile />
      <div ref={AboutUs}>
        <BodyCompanyAboutUs />
      </div>
      <div ref={OurCore}>
        <BodyCompanyOurValues />
      </div>
      <div ref={OurSpeciality}>
        <OurSpecialitys />
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import "./ListOurValues.scss";
import { AiTwotoneStar } from "react-icons/ai";
import PeopleValues from "../../../../../Assets/people_core.svg";

export default function ListOurValues() {
  const [dataOurValues, setDataOurValues] = useState([]);

  useEffect(() => {
    setDataOurValues([
      {
        title: "Dedication",
        content:
          "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
      },
      {
        title: "Intellectual Honesty",
        content:
          "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.",
      },
      {
        title: "Curiosity",
        content:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
      },
    ]);
  }, []);

  return (
    <div className="mt-4 mb-4">
      <div className="row g-0 text-start">
        <div className="col-6">
          {dataOurValues.map((data, index) => (
            <div key={index}>
              <div className="row g-0 text-start">
                <div className="offset-md-4 col-md-4">
                  <h1 className="title-list-values">
                    <AiTwotoneStar className="me-3" />
                    {data.title}
                  </h1>
                </div>
              </div>
              <div className="row g-0">
                <div className="offset-md-4 col-md-4">
                  <h1 className="sub-list-values">{data.content}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-5 img-center">
          <img src={PeopleValues} alt="PeopleValues" className="w-100"></img>
        </div>
      </div>
    </div>
  );
}

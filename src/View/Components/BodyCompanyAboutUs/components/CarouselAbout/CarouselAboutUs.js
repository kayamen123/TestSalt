import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselAboutUs.scss";

export default function CarouselAboutUs() {
  const [dataCarousel, setDataCarousel] = useState([]);

  useEffect(() => {
    setDataCarousel([
      {
        title: "Who we are",
        subTitle: "Technology Company",
        content:
          "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      },
      {
        title: "What we do",
        subTitle: "Professional Brand Management",
        content:
          "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      },
      {
        title: "How we do",
        subTitle: "Strategize, Design, Collaborate",
        content:
          "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.",
      },
    ]);
  }, []);

  return (
    <>
      <div className="row mt-4 mb-4 pt-4 g-0">
        <div className="col-12 text-center">
          <Carousel variant="dark" className="mt-3">
            {dataCarousel.map((data, index) => (
              <Carousel.Item key={index}>
                <div className="row mt-4 mb-4 pt-4 pb-4 g-0 background-carousel">
                  <div className="offset-md-4 col-md-4 text-center">
                    <h1 className="title-carousel">{data.title}</h1>
                    <h2 className="sub-carousel-title mt-3">{data.subTitle}</h2>
                    <label className="sub-carousel">{data.content}</label>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

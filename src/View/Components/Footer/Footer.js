import React from "react";
import { Link } from "react-router-dom";
import LogoCompany from "../../../Assets/logo_foot.png";
import "./Footer.scss";
import { FaInstagram, FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { ImArrowUp } from "react-icons/im";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const myData = {
    title: "Follow Me",
    content: [
      {
        imgSource: <FaInstagram size={100} />,
        route: "https://www.instagram.com/fenri_min",
      },
      {
        imgSource: <FaTwitterSquare size={100} />,
        route: "https://twitter.com/Fenri_M",
      },
      {
        imgSource: <FaFacebookSquare size={100} />,
        route: "https://www.facebook.com/fenri.mintardja/",
      },
    ],
  };

  return (
    <footer className="background-footer">
      <div className="container">
        <div className="footer-absolute">
          <button className="back-to-top-button p-3" onClick={scrollToTop}>
            <ImArrowUp size={30} />
          </button>
        </div>
        <div className="row">
          <div className="offset-md-4 col-md-4">
            <div className="footer-title">
              <div className="container-logo">
                <Link to="/">
                  <img src={LogoCompany} alt="Company" className="w-100" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 pt-4">
          <div className="row">
            <div className="offset-md-4 col-md-4 footer-sub-title text-center">
              <label>Follow me at :</label>
            </div>
          </div>
          <div className="row">
            <div className="offset-md-4 col-md-4 text-center">
              <div className="social-links">
                {myData.content.map((data, i) => (
                  <>
                    <a href={data.route} key={i}>
                      {data.imgSource}
                    </a>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="copyright footer-sub-title">
            © 2022, <span>Fenri Mintardja</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

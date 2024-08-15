import React from "react";
import am from "../src/images/img3.jpg";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center ">
        <div className="container-fluid ">
          <div className="row ">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="text-white">
                    {props.name}
                    <strong className="brand-name"> Aman tech</strong>
                  </h1>
                  <p className="my3 font-italic text-white ">
                    Creative Souls Software House has earned the trust of over
                    150+ clients by consistently delivering high-quality web
                    development, app development, digital marketing, and custom
                    software solutions. Our commitment to excellence goes beyond
                    just delivering projects—we partner with you to ensure your
                    business grows and thrives in the digital landscape. We
                    stand by our work, offering a satisfaction guarantee that
                    includes a refund policy if our solutions don’t meet your
                    expectations. With a focus on building long-term
                    relationships, we are dedicated to your success, providing
                    reliable and innovative tech services that you can count on.
                  </p>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="button2">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="home img"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;

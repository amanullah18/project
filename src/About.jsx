import React from "react";
import Common from "./Common";
import am from "../src/images/ab.jpg"


const About =()=>{
    return (
      <div className="about">
        <Common
          name="Welcome to About page"
          imgsrc={am}
          visit="/contact"
          btname="Contact Now"
        />
      </div>
    );
}

export default About;
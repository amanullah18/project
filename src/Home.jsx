import React from "react";
import am from "../src/images/img3.jpg"
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import Common from "./Common";



const Home=()=>{
    return(
        <>
            <Common
          name="Grow Your business with"
          imgsrc={am}
          visit="/service"
          btname="Get Started"
            />
        </>
    )
}




// const Home =()=>{
//     return(
//         <>
//       <section id="header" className="d-flex align-items-center">
//       <div className="container-fluid nav_bg">
//             <div className="row ">
//                 <div className="col-10 mx-auto">
//                 <div className="row">
//                     <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
//                         <h1>GROW YOUR BUSINESS WITH <strong className="brand-name"> Amanullah tech</strong></h1>
//                         <h2 className="my3">
//                             we are the team of telented developers making websites
//                         </h2>
//                         <div className="mt-3">
//                             <NavLink to="service" className="button2">Get Started</NavLink>
//                         </div>
//                     </div>

//                     <div className="col-lg-6 order-1 order-lg-2 header-img">
//                         <img src={am} className="img-fluid animated" alt="home img"></img>
//                     </div>
//                     </div>
//                 </div>
//                 </div>
//                 </div>
//       </section>
//         </>
//     )
// }

export default Home;
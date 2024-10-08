import React from "react";
import web from "../src/images/web.jpg"
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import Sdata from "./Sdata";

const Card=(props)=>{
return(
    <>
       
                        <div className="col-md-4 col-10 mx-auto  ">
                        <div className="card   h-100" >
                            <img src={props.imgsrc} className="card-img-top bg-white h-50" alt={props.imgsrc}/>
                            <div className="card-body h-75">
                              <h5 className="card-title font-weight-bold  ">{props.title}</h5>
                              <p className="card-text">{props.text}</p>
                              {/* <NavLink to="" className="btn btn-primary">Go somewhere</NavLink> */}
                            </div>
                                </div>
                        </div>
                
    </>
)

}

export default Card
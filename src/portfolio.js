import React from "react";
import Card from "./card";
import Sdata from "./Sdata";
import Pdata from "./Pdata";


const Portfolio =()=>{
    return(
        <>
                <div className="portmargin ">
            <h1 className="text-center ">Portfolio</h1>
           </div>
           <div className="container-fluid mb-5  ">
            <div className="row ">
                <div className="col-10 mx-auto ">
                    <div className="row gy-4">
                        {Pdata.map((val,ind)=>{
                            return <Card  key={ind} imgsrc={val.imgsrc}
                                         title={val.title}
                                            text={val.text}
                                         />
                        })
                        }
                    </div>
                    </div>
                    </div>
                    </div>
           
        </>
    )
}

export default Portfolio;
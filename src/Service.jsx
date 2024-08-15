import React from "react";
import Card from "./card";
import Sdata from "./Sdata";


const Service =()=>{
    return(
        <>
                <div className=" portmargin servicesc">
            <h1 className="text-center">Our services</h1>
           </div>
           <div className="container-fluid pb-5  ">
            <div className="row servicesrow">
                <div className="col-10 mx-auto ">
                    <div className="row gy-4">
                        {Sdata.map((val,ind)=>{
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

export default Service;
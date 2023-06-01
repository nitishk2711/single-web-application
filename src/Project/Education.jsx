import React from "react";
import Card from "./Card";
import Edata from "./Edata";

const Education = () => {
    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Education details</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-5" >
                            {
                                Edata.map((val , ind)=>{
                                    return(

                                        <Card key={ind} imgsrc={val.imgsrc} 
                                        tittle = {val.tittle} 
                                        
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div> 
        </>
    ); 
};

export default Education;
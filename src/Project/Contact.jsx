import React, { useState } from "react";

const Contact = () =>{

    const [data, setData] = useState({
        fullname : "",
        phone :"",
        email :"",
        feedback : "",
    });

    const inputEvent = (event) =>{
        const {name , value} = event.target;

        setData((preData) =>{
            return{
                ...preData , 
                [name] : value,
            };
        });
    };

    const formSubmit = (d) =>{
        d.preventDefault();
        alert(`My Name is ${data.fullname} and my phone number is ${data.phone} and my email is ${data.email} messege ${data.feedback}`)

    };

    return(
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact US</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                        <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter Your Name" 
                         
                        />
                        </div>

                        <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Phone</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Mobile Number" 
                        />
                        </div>

                        <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com" />
                        </div>

                        <div class="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Feedback</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" name="feedback" value={data.feedback} onChange={inputEvent} rows="3"></textarea>
                        </div>       
                        <div class="col-12">
                            <button class="btn btn-outline-primary" type="submit">Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
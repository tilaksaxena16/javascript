//import React from "react";
//import './Signupform.css';

const Signupform = () =>{
    

    return(
        <>
        <html>
            <head>

            </head>
            <body>
                <div className="container">
                    <div className="margin-top">
                        <h1>Student Registration Form</h1>
                        <p>Fill out the form carefully for Registration</p>
                    </div>
                    <div className="margin-top padding">
                        <h4>Student Name</h4>
                    </div>
                    <div className="div-dis">
                        <div>
                            <input type='text' name="First Name" className="input-size "/>
                            <p>First Name</p>
                        </div>
                        <div className="padding-left">
                            <input type="text" name="Middle Name" className="input-size"/>
                            <p>Middle Name</p>
                        </div>
                        <div className="padding-left">
                            <input type='text' name='Last Name' className="input-size"/>
                            <p>Last Name</p>
                        </div>
                    </div>
                    <div className="margin-top padding">
                        <h4>Address</h4>
                    </div>
                    <div>
                        <input type='text' className="input"/>
                        <p>Street Address</p>
                    </div>
                    <div className="margin-top">
                        <input type="text" className="input"/>
                        <p>Street Address Line 2</p>
                    </div>
                    <div className="div-dis margin-top" >
                        <div>
                            <input type='text' className="input-size"/>
                            <p>City</p>
                        </div>
                        <div className="padding-left">
                            <input type='text' className="input-size"/>
                            <p>State/Province</p>
                        </div>
                    </div>
                    <div className="margin-top">
                        <input type='text' className="input-size"/>
                        <p>Postal/Zip code</p>
                    </div>
                    <div className="div-dis margin-top">
                        <div>
                            <div className="padding">
                                <h4>Student E-mail</h4>
                            </div>
                            <div>
                                <input type='text' placeholder="ex: myname@example.com" className="input-size"/>
                                <p>example@example.com</p>
                            </div>
                        </div>
                        <div className="padding-left">
                            <div>
                                <h4 className="padding">Mobile Number</h4>
                            </div>
                            <div>
                                <input type='text' placeholder="(000} 000-000" className="input-size"/>
                                <p>example@example.com</p>
                            </div>
                        </div>
                    </div>










                </div>

            </body>

        </html>

        </>
    )
}

export { Signupform }
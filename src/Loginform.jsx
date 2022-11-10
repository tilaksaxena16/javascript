//import React from "react";
//import './Loginform.css';

const Loginform = () =>{

    return(
        <>
        <html>
            <head>

            </head>
            <body>
                <div className="bgcol">
                    <div className="container">
                        <div className="divbgcol">
                            <input type='text'placeholder='username' className="input"/>
                            <input type='text'placeholder='password' className="input"/>
                            <button className="button">LOGIN</button>
                            <p className="ptag">Not registered? Create an account</p>

                        </div>
                    </div>    
                </div>
            </body>
        </html>
        </>
    )
}

export { Loginform }

import React from "react";
import './Tabledata.css';

const Tabledata = () =>{

    return(
        <>
        <html>
            <head>
            </head>
            <body>
                <div className="container">
                    <div className="table-container">
                        <table className="table">
                            <tr className="table-head">
                                <th className="td-padding">Full Name</th>
                                <th>Age</th>
                                <th className="td-padding-20">Job Title</th>
                                <th>Location</th>
                            </tr>
                            <tr>
                                <td className="td-padding">Vincent Willamson</td>
                                <td>31</td>
                                <td className="td-padding-20">ios Developer</td>
                                <td>Washington</td>
                            </tr>
                            <tr>
                                <td className="td-padding">Tyler</td>
                                <td>22</td>
                                <td className="td-padding-20">UI/UX Designer</td>
                                <td>New York</td>
                            </tr>
                            <tr>
                                <td className="td-padding">Justin Black</td>
                                <td>26</td>
                                <td className="td-padding-20">Front-End Developer</td>
                                <td>Los Angeles</td>
                            </tr>
                            <tr>
                                <td className="td-padding">Sean Guzman</td>
                                <td>25</td>
                                <td className="td-padding-20">Web Designer</td>
                                <td>San Francisco</td>
                            </tr>
                            <tr>
                                <td className="td-padding">Keith Carter</td>
                                <td>20</td>
                                <td className="td-padding-20">Graphic Designer</td>
                                <td>New York, NY</td>
                            </tr>
                            <tr>
                                <td className="td-padding">Austin Medina</td>
                                <td>32</td>
                                <td className="td-padding-20">Photographer</td>
                                <td>New York</td>
                            </tr>
                            <tr>
                                <td className="td-padding">Adam Henderson</td>
                                <td>35</td>
                                <td className="td-padding-20">UI/UX Designer</td>
                                <td>Washington</td>
                            </tr>
                            <tr>
                                <td className="td-padding">Louis Smith</td>
                                <td>27</td>
                                <td className="td-padding-20">Photographer</td>
                                <td>San Francisco</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </body>
        </html>
        </>
    )
}

export { Tabledata }

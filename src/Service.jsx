import React from "react";
import './Service.css';
import Item from "./Item";

const Service = () => {
    return (
        <>
            <div className="main-service-block">
                <div className="service-container">
                    <div className="main-service-block-inner">
                       
                        <div className="all-block">
                            <div className="first-main">
                                <a href="#">web Devlopment</a>
                                <div className="first-main-inner">
                                    
                                  <Item img="/img/icons8-front-end-64.png" a="Front-end" p="    A front-end developer is a type of software developer who creates the user-facing
                                        side of websites and applications. They are well-versed in web development
                                        languages such as HTML, CSS, and JavaScript that are designed for coding
                                        dynamic, interactive user experiences. Anytime you enjoy website you have a front-end developer to
                                        thank. "/>
                                        
                                  <Item img="/img/development.png" a="Back-end" p="Ever wonder what goes on behind the scenes of a website? For example, where does
                                        your personal information go when you sign up for a free trial? . Unlike front-end
                                        developers, who control everything you can see on a website, back-end developers
                                        are involved in data storage, security, and other server-side functions that you
                                        cannot see."/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Service;
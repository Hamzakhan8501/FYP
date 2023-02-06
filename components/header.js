import React from "react";
import ReactDOM from "react-dom";


export default function Header() {
    return (
        <header id="header">
            <div className="intro">
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 intro-text">
                                <div className="head">
                                    <h1 className="heade">Kissan Dost</h1>
                                    <p>To be a farmer is to ba a student forever,<br />
                                        for each day brings some thing new</p>
                                    <a href="#about" className="btn btn-custom btn-lg page-scroll but">More Info</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

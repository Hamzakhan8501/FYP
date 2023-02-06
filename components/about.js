import React from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <div className="about-text">
                            <h2>Welcome to <span>Kissandost</span></h2>
                            <hr />
                            <p>Crops are very necessary for every nation and crops/Food is a major need of human beings which
                                is fulfilled by the farmers. Farmer cannot get the proper price for their products against their hard
                                and labor work. So, we want to reduce that gap between customers and vendors.</p>
                            <p>That web application will be helpful for farmers to easy way to give the land to the weary, crop
                                exchange. Farmers will spend a minimum amount on agriculture products like pesticides,
                                medicine, floriculture, seeds, etc. Organic food requires proper temperature and humidity so,
                                through that web application,</p>
                            <a href="#services" className="btn btn-custom btn-lg page-scroll">View All Services</a> </div>
                    </div>
                    <div className="col-xs-12 col-md-3">
                        <div className="about-media"> <img src="img/about-1.jpg" alt=" " /> </div>
                        <div className="about-desc">
                            <h3>Farmers Care</h3>
                            <p className="farmer">A farmer is a person engaged in agriculture, raising living organisms for food or raw materials. The term usually applies to people who do some combination of raising field crops, orchards, vineyards, poultry, or other livestock.</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-3">
                        <div className="about-media"> <img src="img/about-2.jpg" alt=" " /> </div>
                        <div className="about-desc">
                            <h3>Land Care</h3>
                            <p className="farmer">The term land encompasses all physical elements, bestowed by nature, to a specific area or piece of property—the environment, fields, forests, minerals, climate, animals, and bodies or sources of water.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
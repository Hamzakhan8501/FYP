import React from "react";
import { ReactDOM } from "react";

export default function Services() {
    return(
        <div id="services">
                <div className="container">
                    <div className="col-md-10 col-md-offset-1 section-title text-center serv">
                        <h2>Our Features</h2>
                        <hr />
                        <p>We deliever you the best products over the land at your footstep.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-3 text-center">
                            <div className="service-media"> <img src="img/services/service-2.jpeg" alt=" " /> </div>
                            <div className="service-desc">
                                <h3>Crops</h3>
                                <p>Farming looks mighty easy, when your plow is a pencil and you're a thousand miles from the cornfield. we deliever you the organics from the finest land across the country</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="service-media"> <img src="img/services/service-3.jpeg" alt=" " /> </div>
                            <div className="service-desc">
                                <h3>Fertilizers</h3>
                                <p>Fertilizers are essential for the security of the world's food supply. We believe in delivering the magical components that enhances the yield of the crop</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="service-media"> <img src="img/services/service-8.jpeg" alt=" " /> </div>
                            <div className="service-desc">
                                <h3>Cold storages</h3>
                                <p>Cold storage is a facility that primarily stores food items that are short-lived and highly likely to get spoilt under normal conditions. These may include fruits, vegetables, fish, meat etc.</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="service-media"> <img src="img/services/service-8.jpg" alt=" " /> </div>
                            <div className="service-desc">
                                <h3>Land</h3>
                                <p>Land, also called dry land, ground, or earth, is the solid terrestrial surface of planet Earth that is not submerged by the ocean or another body of water.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
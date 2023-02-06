import React, { useEffect } from "react";
import { ReactDOM } from "react";
import Navbar from "../navdar";
import Footer from "./footer";
import './feature.css'


export default function Feature() {
    return (
        <div>
            <Navbar/>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="1000">
                        <img src="img/slider/slider.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src="img/slider/slider1.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="sli">Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img src="img/slider/slider23.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <h1 className="lead"><b>Featured Products</b></h1>
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="img/products/crops.jpeg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">20 Acres wheat</h5>
                                <p className="card-text">I need someone who will offer me a decent price so that I sell the wheat</p>
                                <h3>Rs: 150k per acres</h3>
                                <h6>Saddar, Lahore: 1 week ago</h6>
                            </div>
                            <div className="card-footer">
                                <a href="" className="add"><b>More Information</b></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="img/products/land.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Land for rent</h5>
                                <p className="card-text">I need a cashier for my 10 acres of unclaimed land. </p>
                                <h3>Rs: 120k per acres</h3>
                                <h6>Katchery road, Multan: 5 days ago</h6>
                            </div>
                            <div className="card-footer">
                            <a href="" className="add"><b>More Information</b></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="img/products/store.jpeg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Need cold storage</h5>
                                <p className="card-text">I need someone with cold storage for potatoes. I need to preserve my 15 acres of potatoes for six months. </p>
                                <h3>Rs: 20k per acres</h3>
                                <h6>Sleem road, Karachi: 5 days ago</h6>
                            </div>
                            <div className="card-footer">
                            <a href="" className="add"><b>More Information</b></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="img/portfolio/12-small.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="img/portfolio/11-large.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="img/portfolio/10-large.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           <Footer/>
        </div>
    )
}
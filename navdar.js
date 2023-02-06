import React from "react";
import { ReactDOM } from "react";
import './style.css';

export default function Navbar() {
    return (
        <div>
            <div className="navi">
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="#"><h1 className="logo">Kissan<span className="logo2">Dost</span></h1></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Services</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Blog
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Blog</a></li>
                                        <li><a class="dropdown-item" href="#">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link active">Contact</a>
                                </li>
                            </ul>
                            <form className="form">
                                <button className="btn btn-outline-success">Register</button>
                            </form>
                            <form >
                                <button className="btn btn-outline-success">Login</button>
                            </form>
                        </div>
                    </div>

                </nav>

            </div>
        </div>
    )
}
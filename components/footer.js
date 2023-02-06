import React from "react";
import ReactDOM from "react-dom";

export default function Footer() {
    return (
        <footer>
            <div className="footer-wrappr" data-background="img/footer-bg.png">
                <div className="footer-area footer-padding ">
                    <div className="container">
                        <div className="row d-flex justify-content-between area">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="flex">
                                        <div class="footer-logo mb-25">
                                            <a href="index.html"><img className="logo1" src="img/logo1.png" alt="" /></a>
                                        </div>
                                        <div className="footer-logo mb-25">
                                            <a className="navbar-brand log" href="#"><h1>Kissan<span>Dost</span></h1></a>
                                        </div>
                                    </div>

                                    <div className="footer-tittle mb-50">
                                        <p>Subscribe our newsletter to get updates about our services</p>
                                    </div>
                                    <div className="footer-form">
                                        <div id="mc_embed_signup">
                                            <form>
                                                <input type="email" id="newsletter-form-email" placeholder=" Email Address " />
                                                <div className="form-icon">
                                                    <button type="submit" name="submit" id="newsletter-submit" className="email_icon newsletter-submit button-contactForm">
                                                        Subscribe
                                                    </button>
                                                </div>
                                                <div className="mt-10 info"></div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* <div className="footer-social mt-50 icons">
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="https://bit.ly/sai4ull"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5 add">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Company</h4>
                                        <ul>
                                            <li><a href="#">Why choose us</a></li>
                                            <li><a href="#"> Review</a></li>
                                            <li><a href="#">Customers</a></li>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">Carrier</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5 add">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Products</h4>
                                        <ul>
                                            <li><a href="#">Why choose us</a></li>
                                            <li><a href="#"> Review</a></li>
                                            <li><a href="#">Customers</a></li>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">Carrier</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5 add">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Support</h4>
                                        <ul>
                                            <li><a href="#">Technology</a></li>
                                            <li><a href="#">  Products</a></li>
                                            <li><a href="#">Customers</a></li>
                                            <li><a href="#">Quality</a></li>
                                            <li><a href="#">Sales geography</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="footer-border">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="footer-copy-right text-center">
                                        <p>
                                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Kissan Dost</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
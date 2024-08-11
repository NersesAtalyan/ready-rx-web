
export default function Home() {
    return (
        <>
            <div className="mobile-header-menu-fullwidth mb-30 d-block d-lg-none">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mobile-menu-toggle d-lg-none">
                                <span>MENU</span>
                                <a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
                                    <svg viewBox="0 0 800 600">
                                        <path
                                            d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                                            id="top"></path>
                                        <path d="M300,320 L540,320" id="middle"></path>
                                        <path
                                            d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                                            id="bottom"
                                            transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="ltn__utilize-cart-menu" className="ltn__utilize ltn__utilize-cart-menu">
                <div className="ltn__utilize-menu-inner ltn__scrollbar">
                    <div className="ltn__utilize-menu-head">
                        <span className="ltn__utilize-menu-title">Cart</span>
                        <button className="ltn__utilize-close">×</button>
                    </div>
                    <div className="mini-cart-product-area ltn__scrollbar">
                        <div className="mini-cart-item clearfix">
                            <div className="mini-cart-img">
                                <a href="#"><img src="img/product/1.png" alt="Image"/></a>
                                <span className="mini-cart-item-delete"><i className="icon-cancel"></i></span>
                            </div>
                            <div className="mini-cart-info">
                                <h6><a href="#">Antiseptic Spray</a></h6>
                                <span className="mini-cart-quantity">1 x $65.00</span>
                            </div>
                        </div>
                        <div className="mini-cart-item clearfix">
                            <div className="mini-cart-img">
                                <a href="#"><img src="img/product/2.png" alt="Image"/></a>
                                <span className="mini-cart-item-delete"><i className="icon-cancel"></i></span>
                            </div>
                            <div className="mini-cart-info">
                                <h6><a href="#">Digital Stethoscope</a></h6>
                                <span className="mini-cart-quantity">1 x $85.00</span>
                            </div>
                        </div>
                        <div className="mini-cart-item clearfix">
                            <div className="mini-cart-img">
                                <a href="#"><img src="img/product/3.png" alt="Image"/></a>
                                <span className="mini-cart-item-delete"><i className="icon-cancel"></i></span>
                            </div>
                            <div className="mini-cart-info">
                                <h6><a href="#">Cosmetic Containers</a></h6>
                                <span className="mini-cart-quantity">1 x $92.00</span>
                            </div>
                        </div>
                        <div className="mini-cart-item clearfix">
                            <div className="mini-cart-img">
                                <a href="#"><img src="img/product/4.png" alt="Image"/></a>
                                <span className="mini-cart-item-delete"><i className="icon-cancel"></i></span>
                            </div>
                            <div className="mini-cart-info">
                                <h6><a href="#">Thermometer Gun</a></h6>
                                <span className="mini-cart-quantity">1 x $68.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="mini-cart-footer">
                        <div className="mini-cart-sub-total">
                            <h5>Subtotal: <span>$310.00</span></h5>
                        </div>
                        <div className="btn-wrapper">
                            <a href="cart.html" className="theme-btn-1 btn btn-effect-1">View Cart</a>
                            <a href="cart.html" className="theme-btn-2 btn btn-effect-2">Checkout</a>
                        </div>
                        <p>Free Shipping on All Orders Over $100!</p>
                    </div>

                </div>
            </div>

            <div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
                <div className="ltn__utilize-menu-inner ltn__scrollbar">
                    <div className="ltn__utilize-menu-head">
                        <div className="site-logo">
                            <a href="index.html"><img src="img/logo.png" alt="Logo"/></a>
                        </div>
                        <button className="ltn__utilize-close">×</button>
                    </div>
                    <div className="ltn__utilize-menu-search-form">
                        <form action="#">
                            <input type="text" placeholder="Search..."/>
                            <button><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                    <div className="ltn__utilize-menu">
                        <ul>
                            <li><a href="#">Home</a>
                                <ul className="sub-menu">
                                    <li><a href="index.html">Home Style 01</a></li>
                                    <li><a href="index-2.html">Home Style 02</a></li>
                                    <li><a href="index-3.html">Home Style 03</a></li>
                                </ul>
                            </li>
                            <li><a href="#">About</a>
                                <ul className="sub-menu">
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="service.html">Services</a></li>
                                    <li><a href="service-details.html">Service Details</a></li>
                                    <li><a href="portfolio.html">Portfolio</a></li>
                                    <li><a href="portfolio-2.html">Portfolio - 02</a></li>
                                    <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                    <li><a href="team.html">Team</a></li>
                                    <li><a href="team-details.html">Team Details</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="locations.html">Google Map Locations</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Shop</a>
                                <ul className="sub-menu">
                                    <li><a href="shop.html">Shop</a></li>
                                    <li><a href="shop-grid.html">Shop Grid</a></li>
                                    <li><a href="shop-left-sidebar.html">Shop Left sidebar</a></li>
                                    <li><a href="shop-right-sidebar.html">Shop right sidebar</a></li>
                                    <li><a href="product-details.html">Shop details </a></li>
                                    <li><a href="cart.html">Cart</a></li>
                                    <li><a href="wishlist.html">Wishlist</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="order-tracking.html">Order Tracking</a></li>
                                    <li><a href="account.html">My Account</a></li>
                                    <li><a href="login.html">Sign in</a></li>
                                    <li><a href="register.html">Register</a></li>
                                </ul>
                            </li>
                            <li><a href="#">News</a>
                                <ul className="sub-menu">
                                    <li><a href="blog.html">News</a></li>
                                    <li><a href="blog-grid.html">News Grid</a></li>
                                    <li><a href="blog-left-sidebar.html">News Left sidebar</a></li>
                                    <li><a href="blog-right-sidebar.html">News Right sidebar</a></li>
                                    <li><a href="blog-details.html">News details</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Pages</a>
                                <ul className="sub-menu">
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="service.html">Services</a></li>
                                    <li><a href="service-details.html">Service Details</a></li>
                                    <li><a href="portfolio.html">Portfolio</a></li>
                                    <li><a href="portfolio-2.html">Portfolio - 02</a></li>
                                    <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                    <li><a href="team.html">Team</a></li>
                                    <li><a href="team-details.html">Team Details</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="history.html">History</a></li>
                                    <li><a href="add-listing.html">Add Listing</a></li>
                                    <li><a href="locations.html">Google Map Locations</a></li>
                                    <li><a href="404.html">404</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                    <li><a href="coming-soon.html">Coming Soon</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
                        <ul>
                            <li>
                                <a href="account.html" title="My Account">
                            <span className="utilize-btn-icon">
                                <i className="far fa-user"></i>
                            </span>
                                    My Account
                                </a>
                            </li>
                            <li>
                                <a href="wishlist.html" title="Wishlist">
                            <span className="utilize-btn-icon">
                                <i className="far fa-heart"></i>
                                <sup>3</sup>
                            </span>
                                    Wishlist
                                </a>
                            </li>
                            <li>
                                <a href="cart.html" title="Shoping Cart">
                            <span className="utilize-btn-icon">
                                <i className="fas fa-shopping-cart"></i>
                                <sup>5</sup>
                            </span>
                                    Shoping Cart
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="ltn__social-media-2">
                        <ul>
                            <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
                            <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="ltn__utilize-overlay"></div>

            {/*<div className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image " data-bs-bg="img/bg/14.jpg">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-lg-12">*/}
            {/*                <div className="ltn__breadcrumb-inner">*/}
            {/*                    <h1 className="page-title">Contact Us</h1>*/}
            {/*                    <div className="ltn__breadcrumb-list">*/}
            {/*                        <ul>*/}
            {/*                            <li><a href="index.html"><span className="ltn__secondary-color"><i*/}
            {/*                                className="fas fa-home"></i></span> Home</a></li>*/}
            {/*                            <li>Contact</li>*/}
            {/*                        </ul>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="ltn__contact-address-area mb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                                <div className="ltn__contact-address-icon">
                                    <img src="img/icons/10.png" alt="Icon Image"/>
                                </div>
                                <h3>Email Address</h3>
                                <p>info@readyrx.us <br/>
                                    </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                                <div className="ltn__contact-address-icon">
                                    <img src="img/icons/11.png" alt="Icon Image"/>
                                </div>
                                <h3>Phone Number</h3>
                                <p>+1(214)838-0500 <br/> </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                                <div className="ltn__contact-address-icon">
                                    <img src="img/icons/12.png" alt="Icon Image"/>
                                </div>
                                <h3>Office Address</h3>
                                <p>4640 Long Prairie Rd Unit 300, Flower Mound, TX 75028</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<div className="ltn__contact-message-area mb-120 mb--100">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-lg-12">*/}
            {/*                <div className="ltn__form-box contact-form-box box-shadow white-bg">*/}
            {/*                    <h4 className="title-2">Get A Quote</h4>*/}
            {/*                    <form id="contact-form" action="mail.php" method="post">*/}
            {/*                        <div className="row">*/}
            {/*                            <div className="col-md-6">*/}
            {/*                                <div className="input-item input-item-name ltn__custom-icon">*/}
            {/*                                    <input type="text" name="name" placeholder="Enter your name"/>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                            <div className="col-md-6">*/}
            {/*                                <div className="input-item input-item-email ltn__custom-icon">*/}
            {/*                                    <input type="email" name="email" placeholder="Enter email address"/>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                            <div className="col-md-6">*/}
            {/*                                <div className="input-item input-item-subject ltn__custom-icon">*/}
            {/*                                    <input type="text" name="subject" placeholder="Enter the subject"/>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                            <div className="col-md-6">*/}
            {/*                                <div className="input-item input-item-phone ltn__custom-icon">*/}
            {/*                                    <input type="text" name="phone" placeholder="Enter phone number"/>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="input-item input-item-textarea ltn__custom-icon">*/}
            {/*                            <textarea name="message" placeholder="Enter message"></textarea>*/}
            {/*                        </div>*/}
            {/*                        <p><label className="input-info-save mb-0"><input type="checkbox"*/}
            {/*                                                                          name="agree"/> Save my name,*/}
            {/*                            email, and website in this browser for the next time I comment.</label></p>*/}
            {/*                        <div className="btn-wrapper mt-0">*/}
            {/*                            <button className="btn theme-btn-1 btn-effect-1 text-uppercase"*/}
            {/*                                    type="submit">get a free service*/}
            {/*                            </button>*/}
            {/*                        </div>*/}
            {/*                        <p className="form-messege mb-0 mt-20"></p>*/}
            {/*                    </form>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="google-map mb-120">*/}

            {/*    <iframe*/}
            {/*        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd"*/}
            {/*        width="100%" height="100%" frameBorder="0" allowFullScreen="" aria-hidden="false"*/}
            {/*        tabIndex="0"></iframe>*/}

            {/*</div>*/}

            <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom" data-bs-bg="img/1.jpg--">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div
                                className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---">
                                <div className="coll-to-info text-color-white">
                                    <h1>Buy medical disposable face mask <br/> to protect your loved ones</h1>
                                </div>
                                <div className="btn-wrapper">
                                    <a className="btn btn-effect-3 btn-white" href="shop.html">Explore Products <i
                                        className="icon-next"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}
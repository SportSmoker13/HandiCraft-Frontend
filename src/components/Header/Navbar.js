import React from 'react';
import '../../css/animate.min.css'
import '../../css/boxicons.min.css'
import '../../css/owl.carousel.min.css'
import '../../css/bootstrap.min.css'
import '../../css/stylef700.css?v=1.0.1'
import '../../css/responsivef700.css?v=1.0.1'
import logo from '../../images/Logo.png'
import { IoIosArrowDown } from 'react-icons/io';
import { BiCartAlt,  BiUserCircle, BiSearchAlt } from 'react-icons/bi';

function Navbar() {
  return (
    <div>
        <header className="header-area">
        <div className="main-navbar">
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                    <a className="navbar-brand" href="index.html">
                        <img src={logo} alt="logo" />
                    </a>
                    {/* <ul className="cart-menu responsive">
                        <li>
                            <a id="dropdownCartButton" className="position-relative" data-toggle="dropdown" href="#"><span className="item-count">10</span> <i className="bx bx-cart-alt"></i> </a>
                            <div className="dropdown">
                                <div className="dropdown-menu cart-dropdown" aria-labelledby="dropdownCartButton">
                                    <p>2 item(s) in your cart - <span>$665.00</span></p>
                                    <div className="minicart-products">
                                        <div className="minicart-product-info d-flex">
                                            <figure>
                                                <a href="#"> <img className="img-border" src="assets/images/products/product_01.png" alt="Home Decoration" /></a>
                                            </figure>
                                            <div className="product-meta">
                                                <h5 className="product-title">
                                                    <a href="#">Artisan Craft Design Product Handicraft</a>
                                                </h5>
                                                <span className="product-price">1 x $280.00</span>
                                            </div>
                                            <a href="#" title="Delete Product">
                                                <span className="item-delete"><i className="bx bx-trash"></i></span>
                                            </a>
                                        </div>
                                        <div className="minicart-product-info d-flex">
                                            <figure>
                                                <a href="#"> <img className="img-border" src="assets/images/products/product_02.png" alt="Home Decoration" /></a>
                                            </figure>
                                            <div className="product-meta">
                                                <h5 className="product-title">
                                                    <a href="#">Duis sodales ligula et orci pretium tempus</a>
                                                </h5>
                                                <span className="product-price">1 x $280.00</span>
                                            </div>
                                            <a href="#" title="Delete Product">
                                                <span className="item-delete"><i className="bx bx-trash"></i></span>
                                            </a>
                                        </div>

                                        <div className="minicart-product-calculation">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p><strong>Shipping:</strong> <span>$7.00</span></p>
                                                    <p><strong>Tax:</strong> <span>Free</span></p>
                                                    <p><strong>Total: </strong> <span>$665.00</span></p>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="dcart-action">
                                                        <a href="cart.html" className="btn btn-primary">View Cart</a>
                                                        <a href="checkout.html" className="btn btn-secondary">Checkout</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a id="dropdownUserButton" data-toggle="dropdown" href="#"><i className="bx bx-user-circle"></i> </a>
                            <div className="dropdown">
                                <div className="dropdown-menu user-dropdown" aria-labelledby="dropdownUserButton">

                                    <a className="dropdown-item" href="#"><i className="bx bx-user-circle"></i> My Account</a>
                                    <a className="dropdown-item" href="#"><i className="bx bx-heart"></i> My Wishlist</a>
                                    <a className="dropdown-item" href="#"><i className="bx bx-cart-alt"></i> Checkout</a>
                                    <a className="dropdown-item" href="#"><i className="bx bx-log-in"></i> Login Or Register</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <form className="searchbox">
                                <input type="search" placeholder="Search......" name="search" className="searchbox-input" required="" />
                                <button className="searchbox-submit" type="submit"><i className="bx bx-search-alt"></i></button>
                            </form>
                            <a className="search-btn"><i className="bx bx-search-alt"></i></a>
                        </li>
                        <li>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <i className='bx bx-menu'></i>
                                <i className='bx bx-x'></i>
                            </button>
                        </li>
                    </ul> */}

                    <div className="collapse navbar-collapse mean-menu" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link active" href="#">
                                    Home
                                </a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" data-toggle="dropdown" aria-expanded="false">
                                    Pages 
                                    <IoIosArrowDown />
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a href="about.html" className="nav-link">About Us</a></li>
                                    <li className="nav-item"><a href="signin.html" className="nav-link">Login</a></li>
                                    <li className="nav-item"><a href="signup.html" className="nav-link">Register</a></li>
                                    <li className="nav-item"><a href="error-404.html" className="nav-link">404 Error</a></li>
                                    <li className="nav-item"><a href="coming-soon.html" className="nav-link">Coming Soon</a></li>
                                    <li className="nav-item"><a href="faqs.html" className="nav-link">FAQ's</a></li>
                                    <li className="nav-item"><a href="contact.html" className="nav-link">Contact Us</a></li>
                                </ul>

                            </li>

                            <li className="nav-item dropdown megamenu">
                                <a className="nav-link" href="#" data-toggle="dropdown" aria-expanded="false">
                                    Products 
                                    <IoIosArrowDown />
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-3 col-sm-6 col-xs-6 ">
                                                    <h6 className="submenu-title">Home Decoration</h6>
                                                    <ul className="megamenu-submenu">
                                                        <li><a href="#">Consectetur adipiscing elit</a></li>
                                                        <li><a href="#">Pellentesque facilisis</a></li>
                                                        <li><a href="#">Vivamus at sapien</a></li>
                                                        <li><a href="#">Elementum urna</a></li>
                                                        <li><a href="#">Sed et mauris</a></li>
                                                        <li><a href="#">Sed sit amet purus</a></li>
                                                        <li><a href="#">Tristique ac faucibus</a></li>
                                                    </ul>
                                                </div>

                                                <div className="col-md-3 col-sm-6 col-xs-6 ">
                                                    <h6 className="submenu-title">Jute Craft</h6>
                                                    <ul className="megamenu-submenu">
                                                        <li><a href="#">Consectetur adipiscing elit</a></li>
                                                        <li><a href="#">Pellentesque facilisis</a></li>
                                                        <li><a href="#">Vivamus at sapien</a></li>
                                                        <li><a href="#">Elementum urna</a></li>
                                                        <li><a href="#">Sed et mauris</a></li>
                                                        <li><a href="#">Sed sit amet purus</a></li>
                                                        <li><a href="#">Tristique ac faucibus</a></li>
                                                    </ul>
                                                </div>

                                                <div className="col-md-3 col-sm-6 col-xs-6 ">
                                                    <h6 className="submenu-title">Bamboo Furniture</h6>
                                                    <ul className="megamenu-submenu">
                                                        <li><a href="#">Consectetur adipiscing elit</a></li>
                                                        <li><a href="#">Pellentesque facilisis</a></li>
                                                        <li><a href="#">Vivamus at sapien</a></li>
                                                        <li><a href="#">Elementum urna</a></li>
                                                        <li><a href="#">Sed et mauris</a></li>
                                                        <li><a href="#">Sed sit amet purus</a></li>
                                                        <li><a href="#">Tristique ac faucibus</a></li>
                                                    </ul>
                                                </div>

                                                <div className="col-md-3 col-sm-6 col-xs-6 ">
                                                    <h6 className="submenu-title">Wood Craft</h6>

                                                    <ul className="megamenu-submenu">
                                                        <li><a href="#">Consectetur adipiscing elit</a></li>
                                                        <li><a href="#">Pellentesque facilisis</a></li>
                                                        <li><a href="#">Vivamus at sapien</a></li>
                                                        <li><a href="#">Elementum urna</a></li>
                                                        <li><a href="#">Sed et mauris</a></li>
                                                        <li><a href="#">Sed sit amet purus</a></li>
                                                        <li><a href="#">Tristique ac faucibus</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" data-toggle="dropdown" aria-expanded="false">
                                    Shop 
                                    <IoIosArrowDown />
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a href="shop.html" className="nav-link">Shop Grid</a></li>
                                    <li className="nav-item"><a href="shop-grid-3.html" className="nav-link">Shop 3 Grid</a></li>
                                    <li className="nav-item"><a href="left-sidebar-shop.html" className="nav-link">Shop Left Sidebar</a></li>
                                    <li className="nav-item"><a href="right-sidebar-shop.html" className="nav-link">Shop Right Sidebar</a></li>
                                    <li className="nav-item"><a href="product-details.html" className="nav-link">Products Details</a></li>
                                    <li className="nav-item"><a href="cart.html" className="nav-link">Cart</a></li>
                                    <li className="nav-item"><a href="checkout.html" className="nav-link">Checkout</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" data-toggle="dropdown" aria-expanded="false">
                                    Blog 
                                    <IoIosArrowDown />
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a href="blog.html" className="nav-link">Blog Grid</a></li>
                                    <li className="nav-item"><a href="blog-2.html" className="nav-link">Blog 2 Grid</a></li>
                                    <li className="nav-item"><a href="blog-1.html" className="nav-link">Blog 3 Grid</a></li>
                                    <li className="nav-item"><a href="blog-1.html" className="nav-link">Blog Left Sidebar</a></li>
                                    <li className="nav-item"><a href="blog-3.html" className="nav-link">Blog Right Sidebar</a></li>
                                    <li className="nav-item"><a href="single-blog.html" className="nav-link">Blog Details</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a href="contact.html" className="nav-link">Contact</a>
                            </li>
                        </ul>
                        <ul className="cart-menu">
                            <li>
                                <a className="position-relative" data-toggle="dropdown" href="#">
                                    {/* <span className="item-count">10</span> */}
                                {/* <i className='bx bx-cart-alt' ></i>  */}
                                <BiCartAlt />
                                Cart 
                                {/* <i className='bx bx-chevron-down' ></i> */}
                                <IoIosArrowDown />
                                </a>
                                <div className="dropdown">
                                    <div className="dropdown-menu cart-dropdown" aria-labelledby="dropdownCartButton">
                                        <p>2 item(s) in your cart - <span>$665.00</span></p>
                                        <div className="minicart-products">
                                            <div className="minicart-product-info d-flex">
                                                <figure>
                                                    <a href="#"> <img className="img-border" src="assets/images/products/product_01.png" alt="Home Decoration" /></a>
                                                </figure>
                                                <div className="product-meta">
                                                    <h5 className="product-title">
                                                        <a href="#">Artisan Craft Design Product Handicraft</a>
                                                    </h5>
                                                    <span className="product-price">1 x $280.00</span>
                                                </div>
                                                <a href="#" title="Delete Product">
                                                    <span className="item-delete"><i className="bx bx-trash"></i></span>
                                                </a>
                                            </div>
                                            <div className="minicart-product-info d-flex">
                                                <figure>
                                                    <a href="#"> <img className="img-border" src="assets/images/products/product_02.png" alt="Home Decoration" /></a>
                                                </figure>
                                                <div className="product-meta">
                                                    <h5 className="product-title">
                                                        <a href="#">Duis sodales ligula et orci pretium tempus</a>
                                                    </h5>
                                                    <span className="product-price">1 x $280.00</span>
                                                </div>
                                                <a href="#" title="Delete Product">
                                                    <span className="item-delete"><i className="bx bx-trash"></i></span>
                                                </a>
                                            </div>


                                            <div className="minicart-product-calculation">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p><strong>Shipping:</strong> <span>$7.00</span></p>
                                                        <p><strong>Tax:</strong> <span>Free</span></p>
                                                        <p><strong>Total: </strong> <span>$665.00</span></p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="dcart-action">
                                                            <a href="cart.html" className="btn btn-primary">View Cart</a>
                                                            <a href="checkout.html" className="btn btn-secondary">Checkout</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a data-toggle="dropdown" href="#">
                                    {/* <i className='bx bx-user-circle' ></i> */}
                                    <BiUserCircle />
                                     User 
                                {/* <i className='bx bx-chevron-down' ></i> */}
                                <IoIosArrowDown />
                                </a>
                                <div className="dropdown">
                                    <div className="dropdown-menu user-dropdown" aria-labelledby="dropdownUserButton">

                                        <a className="dropdown-item" href="#"><i className='bx bx-user-circle' ></i> My Account</a>
                                        <a className="dropdown-item" href="#"><i className='bx bx-heart' ></i> My Wishlist</a>
                                        <a className="dropdown-item" href="#"><i className='bx bx-cart-alt' ></i> Checkout</a>
                                        <a className="dropdown-item" href="#"><i className='bx bx-log-in' ></i> Login Or Register</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <form className="searchbox">
                                    <input type="search" placeholder="Search......" name="search" className="searchbox-input" required />
                                    <button className="searchbox-submit" type="submit">
                                        {/* <i className="bx bx-search-alt"></i> */}
                                    </button>
                                </form>
                                <a className="search-btn">
                                    {/* <i className='bx bx-search-alt' ></i> */}
                                    <BiSearchAlt />
                                    </a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        </div>
    </header>
    </div>
    );
}

export default Navbar;

import React from "react";
// import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <React.Fragment>
            
            <p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        
    
        <header>
            <div className="header-area">
                <div className="header-left-sidebar">
                    <div className="logo">
                        <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
                    </div>
                    <div className="main-menu menu-hover">
                        <nav>
                            <ul>
                                <li className="active">
                                     <Link to="/">Home</Link> </li>
                                <li>
                                    <ul className="single-dropdown">
                                        <li><a href="index.html">Fashion</a></li>
                                        <li><a href="index-fashion-2.html">Fashion style 2</a></li>
                                        <li><a href="index-fruits.html">fruits</a></li>
                                        <li><a href="index-book.html">book</a></li>
                                        <li><a href="index-electronics.html">electronics</a></li>
                                        <li><a href="index-electronics-2.html">electronics style 2</a></li>
                                        <li><a href="index-food.html">food & drink</a></li>
                                        <li><a href="index-furniture.html">furniture</a></li>
                                        <li><a href="index-handicraft.html">handicraft</a></li>
                                        <li><a target="_blank" href="index-smart-watch.html">smart watch</a></li>
                                        <li><a href="index-sports.html">sports</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Pages</a>
                                    <ul className="single-dropdown">
                                        <li><a href="about-us.html">about us</a></li>
                                        <li><a href="menu-list.html">menu list</a></li>
                                        <li><a href="login.html">login</a></li>
                                        <li><a href="register.html">register</a></li>
                                        <li><a href="cart.html">cart page</a></li>
                                        <li><a href="checkout.html">checkout</a></li>
                                        <li><a href="wishlist.html">wishlist</a></li>
                                        <li><a href="contact.html">contact</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Latest <span>New</span></a>
                                    <div className="mega-menu-dropdown mega-dropdown-width">
                                        <div className="mega-dropdown-style mega-common4 mb-40">
                                            <h4 className="mega-subtitle"> Clothing</h4>
                                            <ul>
                                                <li><a href="#"> New Products</a></li>
                                                <li><a href="#"> Jackets</a></li>
                                                <li><a href="#"> Dress</a></li>
                                                <li><a href="#"> Winter Collection</a></li>
                                                <li><a href="#"> Ladis Jeans</a></li>
                                                <li><a href="#"> Multipacks</a></li>
                                                <li><a href="#"> Shorts</a></li>
                                                <li><a href="#"> Night wear</a></li>
                                                <li><a href="#"> Top Products</a></li>
                                            </ul>
                                        </div>
                                        <div className="mega-dropdown-style mega-common4 mb-40">
                                            <h4 className="mega-subtitle"> New Products</h4>
                                            <ul>
                                                <li><a href="#">View All</a></li>
                                                <li><a href="#">New Trand</a></li>
                                                <li><a href="#">Boots</a></li>
                                                <li><a href="#">Flat Shoes</a></li>
                                                <li><a href="#">Women Heels</a></li>
                                                <li><a href="#">Slippers</a></li>
                                                <li><a href="#">Socks & Tights</a></li>
                                                <li><a href="#">Trainers</a></li>
                                            </ul>
                                        </div>
                                        <div className="mega-dropdown-style mega-common4 mb-40">
                                            <h4 className="mega-subtitle">Tranding</h4>
                                            <ul>
                                                <li><a href="#">Weeding</a></li>
                                                <li><a href="#">Winter</a></li>
                                                <li><a href="#">Holidays</a></li>
                                                <li><a href="#">Night Party</a></li>
                                                <li><a href="#">Outing Dress</a></li>
                                                <li><a href="#">Outing Dress</a></li>
                                            </ul>
                                        </div>
                                        <div className="mega-dropdown-style mega-common4 discount-mega-common4 mb-40">
                                            <div className="mega-discount">
                                                <h5>Make A Discount</h5>
                                                <h2>UP TO 30%</h2>
                                            </div>
                                        </div>
                                        <div className="mega-banner-img-2">
                                            <a href="single-product.html"><img src="assets/img/bg/3.png" alt=""/></a>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="#">Shop</a>
                                    <div className="mega-menu-dropdown mega-dropdown-width-2">
                                        <div className="mega-dropdown-style mega-common2 mega-common4">
                                            <h4 className="mega-subtitle"> shop layout</h4>
                                            <ul>
                                                <li><a href="shop-grid-2-col.html"> grid 2 column</a></li>
                                                <li><a href="shop-grid-3-col.html"> grid 3 column</a></li>
                                                <li><a href="shop.html">grid 4 column</a></li>
                                                <li><a href="shop-grid-box.html">grid box style</a></li>
                                                <li><a href="shop-list-1-col.html"> list 1 column</a></li>
                                                <li><a href="shop-list-2-col.html">list 2 column</a></li>
                                                <li><a href="shop-list-box.html">list box style</a></li>
                                                <li><a href="cart.html">shopping cart</a></li>
                                                <li><a href="wishlist.html">wishlist</a></li>
                                            </ul>
                                        </div>
                                        <div className="mega-dropdown-style mega-common2 mega-common4">
                                            <h4 className="mega-subtitle">product details</h4>
                                            <ul>
                                                <li><a href="product-details.html">tab style 1</a></li>
                                                <li><a href="product-details-2.html">tab style 2</a></li>
                                                <li><a href="product-details-3.html"> tab style 3</a></li>
                                                <li><a href="product-details-4.html">sticky style</a></li>
                                                <li><a href="product-details-5.html">sticky style 2</a></li>
                                                <li><a href="product-details-6.html">gallery style</a></li>
                                                <li><a href="product-details-7.html">gallery style 2</a></li>
                                                <li><a href="product-details-8.html">fixed image style</a></li>
                                                <li><a href="product-details-9.html">fixed image style 2</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="#">Kids</a>
    
                                </li>
                                <li><a href="#">Discount</a></li>
                                <li><a href="#">Health <span>New</span></a></li>
                                <li><a href="contact.html">contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="currency">
                        <ul>
                            <li><a href="#">EN</a></li>
                            <li><a href="#">RN</a></li>
                        </ul>
                    </div>
                </div>
                <div className="header-right-sidebar">
                    <div className="header-search-cart-login">
                        <div className="logo">
                            <a href="index.html">
                                <img src="assets/img/logo/logo.png" alt=""/>
                            </a>
                        </div>
                        <div className="header-search">
                            <form action="#">
                                <input placeholder="Search What you want" type="text"/>
                                <button>
                                    <i className="ti-search"></i>
                                </button>
                            </form>
                        </div>
                        <div className="header-login">
                            <ul>
                                <li><a href="login.html">Login</a></li>
                                <li><a href="register.html">Reg</a></li>
                            </ul>
                        </div>
                        <div className="header-cart cart-res">
                            <a className="icon-cart" href="#">
                                <i className="ti-shopping-cart"></i>
                                <span className="shop-count pink">02</span>
                            </a>
                            <ul className="cart-dropdown">
                                <li className="single-product-cart">
                                    <div className="cart-img">
                                        <a href="#"><img src="assets/img/cart/1.jpg" alt=""/></a>
                                    </div>
                                    <div className="cart-title">
                                        <h5><a href="#"> Bits Headphone</a></h5>
                                        <h6><a href="#">Black</a></h6>
                                        <span>$80.00 x 1</span>
                                    </div>
                                    <div className="cart-delete">
                                        <a href="#"><i className="ti-trash"></i></a>
                                    </div>
                                </li>
                                <li className="single-product-cart">
                                    <div className="cart-img">
                                        <a href="#"><img src="assets/img/cart/2.jpg" alt=""/></a>
                                    </div>
                                    <div className="cart-title">
                                        <h5><a href="#"> Bits Headphone</a></h5>
                                        <h6><a href="#">Black</a></h6>
                                        <span>$80.00 x 1</span>
                                    </div>
                                    <div className="cart-delete">
                                        <a href="#"><i className="ti-trash"></i></a>
                                    </div>
                                </li>
                                <li className="single-product-cart">
                                    <div className="cart-img">
                                        <a href="#"><img src="assets/img/cart/3.jpg" alt=""/></a>
                                    </div>
                                    <div className="cart-title">
                                        <h5><a href="#"> Bits Headphone</a></h5>
                                        <h6><a href="#">Black</a></h6>
                                        <span>$80.00 x 1</span>
                                    </div>
                                    <div className="cart-delete">
                                        <a href="#"><i className="ti-trash"></i></a>
                                    </div>
                                </li>
                                <li className="cart-space">
                                    <div className="cart-sub">
                                        <h4>Subtotal</h4>
                                    </div>
                                    <div className="cart-price">
                                        <h4>$240.00</h4>
                                    </div>
                                </li>
                                <li className="cart-btn-wrapper">
                                    <a className="cart-btn btn-hover" href="#">view cart</a>
                                    <a className="cart-btn btn-hover" href="#">checkout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mobile-menu-area clearfix d-md-block col-md-12 col-lg-12 col-12 d-lg-none d-xl-none">
                        <div className="mobile-menu">
                            <nav id="mobile-menu-active">
                                <ul className="menu-overflow">
                                    <li><a href="#">HOME</a>
                                        <ul>
                                            <li><a href="index.html">Fashion</a></li>
                                            <li><a href="index-fashion-2.html">Fashion style 2</a></li>
                                            <li><a href="index-fruits.html">Fruits</a></li>
                                            <li><a href="index-book.html">book</a></li>
                                            <li><a href="index-electronics.html">electronics</a></li>
                                            <li><a href="index-electronics-2.html">electronics style 2</a></li>
                                            <li><a href="index-food.html">food & drink</a></li>
                                            <li><a href="index-furniture.html">furniture</a></li>
                                            <li><a href="index-handicraft.html">handicraft</a></li>
                                            <li><a href="index-smart-watch.html">smart watch</a></li>
                                            <li><a href="index-sports.html">sports</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">pages</a>
                                        <ul>
                                            <li><a href="about-us.html">about us</a></li>
                                            <li><a href="menu-list.html">menu list</a></li>
                                            <li><a href="login.html">login</a></li>
                                            <li><a href="register.html">register</a></li>
                                            <li><a href="cart.html">cart page</a></li>
                                            <li><a href="checkout.html">checkout</a></li>
                                            <li><a href="wishlist.html">wishlist</a></li>
                                            <li><a href="contact.html">contact</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">shop</a>
                                        <ul>
                                            <li><a href="shop-grid-2-col.html"> grid 2 column</a></li>
                                            <li><a href="shop-grid-3-col.html"> grid 3 column</a></li>
                                            <li><a href="shop.html">grid 4 column</a></li>
                                            <li><a href="shop-grid-box.html">grid box style</a></li>
                                            <li><a href="shop-list-1-col.html"> list 1 column</a></li>
                                            <li><a href="shop-list-2-col.html">list 2 column</a></li>
                                            <li><a href="shop-list-box.html">list box style</a></li>
                                            <li><a href="product-details.html">tab style 1</a></li>
                                            <li><a href="product-details-2.html">tab style 2</a></li>
                                            <li><a href="product-details-3.html"> tab style 3</a></li>
                                            <li><a href="product-details-4.html">sticky style</a></li>
                                            <li><a href="product-details-5.html">sticky style 2</a></li>
                                            <li><a href="product-details-6.html">gallery style</a></li>
                                            <li><a href="product-details-7.html">gallery style 2</a></li>
                                            <li><a href="product-details-8.html">fixed image style</a></li>
                                            <li><a href="product-details-9.html">fixed image style 2</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">BLOG</a>
                                        <ul>
                                            <li><a href="blog.html">blog 3 colunm</a></li>
                                            <li><a href="blog-2-col.html">blog 2 colunm</a></li>
                                            <li><a href="blog-sidebar.html">blog sidebar</a></li>
                                            <li><a href="blog-details.html">blog details</a></li>
                                            <li><a href="blog-details-sidebar.html">blog details 2</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html"> Contact  </a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="slider-area ">
                        <div className="slider-active owl-carousel">
                        <div className="single-slider single-slider-hm1 bg-img height-100vh" style={{backgroundImage: 'url(assets/img/slider/15.jpg)'}}>
                             <div className="slider-content slider-animation slider-content-style-1 slider-animated-1">
                             <h1 className="animated">Fashion</h1>
                             <p className="animated">Create you own style for better looks. </p>
                         </div>
                     <div className="position-slider-img">
                         <div className="slider-img-1">
                          <img src="assets/img/slider/9.png" alt="" />
                         </div>
                         <div className="slider-img-2">
                              <img className="tilter" src="assets/img/slider/7.png" alt="" />
                     </div>
                     <div className="slider-img-3">
                          <img src="assets/img/slider/8.png" alt="" />
                     </div>
                  </div>
                  </div>
                  <div className="single-slider single-slider-hm1 bg-img height-100vh" style={{backgroundImage: 'url(assets/img/slider/15.jpg)'}}>
                      <div className="slider-content slider-animation slider-content-style-1 slider-animated-2">
                          <h1 className="animated">Fashion</h1>
                             <p className="animated">Create you own style for better looks. </p>
                     </div>
                     <div className="position-slider-img">
                         <div className="slider-img-1">
                       <img src="assets/img/slider/9.png" alt="" />
                         </div>
                         <div className="slider-img-4 slider-mrg">
                          <img className="tilter" src="assets/img/slider/10.png" alt="" />
                     </div>
                     <div className="slider-img-3">
                          <img src="assets/img/slider/8.png" alt="" />
                      </div>
                     </div>
                     </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div className="banner-area">
            <div className="row g-0">
                <div className="col-md-4">
                    <div className="single-banner">
                        <a href="#"><img src="assets/img/banner/1.jpg" alt=""/></a>
                        <div className="banner-content banner-content-style1">
                            <h2>BLUE <br/> <span>Glasses</span></h2>
                            <p>Lorem Ipsum is simply dummy text of the printing.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="single-banner">
                        <a href="#"><img src="assets/img/banner/2.jpg" alt=""/></a>
                        <div className="banner-content banner-content-style2">
                            <span>-  Up to  -</span>
                            <h2>30% off</h2>
                            <p>Black Friday Discount</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="single-banner">
                        <a href="#"><img src="assets/img/banner/3.jpg" alt=""/></a>
                        <div className="banner-content banner-content-style3">
                            <h2>Trand <br/>2018.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="product-area pt-115 pb-120">
            <div className="pl-100 pr-100">
                <div className="container-fluid">
                    <div className="section-title text-center mb-60">
                        <h2>New Arrivals</h2>
                    </div>
                    <div className="product-style">
                        <div className="arrival-active owl-carousel">
                            <div className="product-wrapper">
                                <div className="product-img">
                                    <a href="#">
                                        <img src="assets/img/product/fashion-colorful/1.jpg" alt=""/>
                                    </a>
                                    <span>hot</span>
                                    <div className="product-action">
                                        <a className="animate-left" title="Wishlist" href="#">
                                            <i className="pe-7s-like"></i>
                                        </a>
                                        <a className="animate-top" title="Add To Cart" href="#">
                                            <i className="pe-7s-cart"></i>
                                        </a>
                                        <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                            <i className="pe-7s-look"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h4><a href="product-details.html"> Dagger Smart Trousers </a></h4>
                                    <span>$115.00</span>
                                </div>
                            </div>
                            <div className="product-wrapper">
                                <div className="product-img">
                                    <a href="#">
                                        <img src="assets/img/product/fashion-colorful/2.jpg" alt=""/>
                                    </a>
                                    <div className="product-action">
                                        <a className="animate-left" title="Wishlist" href="#">
                                            <i className="pe-7s-like"></i>
                                        </a>
                                        <a className="animate-top" title="Add To Cart" href="#">
                                            <i className="pe-7s-cart"></i>
                                        </a>
                                        <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                            <i className="pe-7s-look"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h4><a href="product-details.html">Homme Tapered Smart </a></h4>
                                    <span>$115.00</span>
                                </div>
                            </div>
                            <div className="product-wrapper">
                                <div className="product-img">
                                    <a href="#">
                                        <img src="assets/img/product/fashion-colorful/3.jpg" alt=""/>
                                    </a>
                                    <span>hot</span>
                                    <div className="product-action">
                                        <a className="animate-left" title="Wishlist" href="#">
                                            <i className="pe-7s-like"></i>
                                        </a>
                                        <a className="animate-top" title="Add To Cart" href="#">
                                            <i className="pe-7s-cart"></i>
                                        </a>
                                        <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                            <i className="pe-7s-look"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h4><a href="product-details.html">Navy Bird Print </a></h4>
                                    <span>$115.00</span>
                                </div>
                            </div>
                            <div className="product-wrapper">
                                <div className="product-img">
                                    <a href="#">
                                        <img src="assets/img/product/fashion-colorful/4.jpg" alt=""/>
                                    </a>
                                    <div className="product-action">
                                        <a className="animate-left" title="Wishlist" href="#">
                                            <i className="pe-7s-like"></i>
                                        </a>
                                        <a className="animate-top" title="Add To Cart" href="#">
                                            <i className="pe-7s-cart"></i>
                                        </a>
                                        <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                            <i className="pe-7s-look"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h4><a href="product-details.html">Jacket Stonewash </a></h4>
                                    <span>$115.00</span>
                                </div>
                            </div>
                            <div className="product-wrapper">
                                <div className="product-img">
                                    <a href="#">
                                        <img src="assets/img/product/fashion-colorful/5.jpg" alt=""/>
                                    </a>
                                    <span>hot</span>
                                    <div className="product-action">
                                        <a className="animate-left" title="Wishlist" href="#">
                                            <i className="pe-7s-like"></i>
                                        </a>
                                        <a className="animate-top" title="Add To Cart" href="#">
                                            <i className="pe-7s-cart"></i>
                                        </a>
                                        <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                            <i className="pe-7s-look"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h4><a href="product-details.html">Skinny Jeans Terry </a></h4>
                                    <span>$115.00</span>
                                </div>
                            </div>
                            <div className="product-wrapper">
                                <div className="product-img">
                                    <a href="#">
                                        <img src="assets/img/product/fashion-colorful/1.jpg" alt=""/>
                                    </a>
                                    <div className="product-action">
                                        <a className="animate-left" title="Wishlist" href="#">
                                            <i className="pe-7s-like"></i>
                                        </a>
                                        <a className="animate-top" title="Add To Cart" href="#">
                                            <i className="pe-7s-cart"></i>
                                        </a>
                                        <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                            <i className="pe-7s-look"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h4><a href="product-details.html">Black Faux Suede </a></h4>
                                    <span>$115.00</span>
                                </div>
                            </div>
                            <div className="product-wrapper">
                                <div className="product-img">
                                    <a href="#">
                                        <img src="assets/img/product/fashion-colorful/2.jpg" alt=""/>
                                    </a>
                                    <span>hot</span>
                                    <div className="product-action">
                                        <a className="animate-left" title="Wishlist" href="#">
                                            <i className="pe-7s-like"></i>
                                        </a>
                                        <a className="animate-top" title="Add To Cart" href="#">
                                            <i className="pe-7s-cart"></i>
                                        </a>
                                        <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                            <i className="pe-7s-look"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h4><a href="product-details.html">Black Faux Suede </a></h4>
                                    <span>$115.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="banner-area-two">
            <div className="container">
                <div className="row g-0">
                    <div className="col-lg-6 col-xl-6">
                        <div className="banner-wrapper mrgn-r-4">
                            <a href="#"><img src="assets/img/banner/4.jpg" alt=""/></a>
                            <div className="banner-wrapper-content">
                                <h3>20% <br/><span>off</span></h3>
                                <h2><span>Trending</span> <br/>Fashion <br/>2018...</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6">
                        <div className="row g-0">
                            <div className="col-lg-12">
                                <div className="banner-wrapper mrgn-b-4">
                                    <a href="#"><img src="assets/img/banner/5.jpg" alt=""/></a>
                                    <div className="banner-wrapper-content2">
                                        <h3>Winter <br/>Collection.</h3>
                                        <a href="#">shop now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="banner-wrapper mrgn-r-4">
                                            <a href="#"><img src="assets/img/banner/6.jpg" alt=""/></a>
                                            <div className="banner-wrapper-content3">
                                                <h3><span>new</span> <br/>fashion</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="banner-wrapper">
                                            <a href="#"><img src="assets/img/banner/7.jpg" alt=""/></a>
                                            <div className="banner-wrapper-content4">
                                                <h4>25 December.</h4>
                                                <h2>Gift Shop</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="all-products-area pt-115 pb-50">
            <div className="pl-100 pr-100">
                <div className="container-fluid">
                    <div className="section-title text-center mb-60">
                        <h2>All Products</h2>
                    </div>
                    <div className="product-style">
                        <div className="product-tab-list text-center mb-95 nav product-menu-mrg" role="tablist">
                            <a className="active" href="#home1" data-bs-toggle="tab" role="tab" aria-selected="true" aria-controls="home1">
                                <h4>all </h4>
                            </a>
                            <a href="#home2" data-bs-toggle="tab" role="tab" aria-selected="false" aria-controls="home2">
                                <h4>woman </h4>
                            </a>
                            <a href="#home3" data-bs-toggle="tab" role="tab" aria-selected="false" aria-controls="home3">
                                <h4>man</h4>
                            </a>
                            <a href="#home4" data-bs-toggle="tab" role="tab" aria-selected="false" aria-controls="home4">
                                <h4>ACCESSORIES</h4>
                            </a>
                            <a href="#home5" data-bs-toggle="tab" role="tab" aria-selected="false" aria-controls="home5">
                                <h4>kids</h4>
                            </a>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane active show fade" id="home1" role="tabpanel">
                                <div className="custom-row">
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/1.jpg" alt=""/>
                                                </a>
                                                <span>hot</span>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Black Faux Suede</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/2.jpg" alt=""/>
                                                </a>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Denim Stonewash</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/3.jpg" alt=""/>
                                                </a>
                                                <span>hot</span>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Mini Waffle 5 Pack</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/4.jpg" alt=""/>
                                                </a>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Dagger Smart Trousers</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/5.jpg" alt=""/>
                                                </a>
                                                <span>hot</span>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Homme Tapered Smart</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/5.jpg" alt=""/>
                                                </a>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Navy Bird Print</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/4.jpg" alt=""/>
                                                </a>
                                                <span>hot</span>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Jacket Stonewash</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/3.jpg" alt=""/>
                                                </a>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Arifo Stylas Dress </a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/2.jpg" alt=""/>
                                                </a>
                                                <span>hot</span>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Skinny Jeans Terry</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/1.jpg" alt=""/>
                                                </a>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Leg Smart Trousers </a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="home2" role="tabpanel">
                                <div className="custom-row">
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/5.jpg" alt=""/>
                                                </a>
                                                <span>hot</span>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Black Faux Suede</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/4.jpg" alt=""/>
                                                </a>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Leg Smart Trousers</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/3.jpg" alt=""/>
                                                </a>
                                                <span>hot</span>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Skinny Jeans Terry </a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/2.jpg" alt=""/>
                                                </a>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Jacket Stonewash</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/1.jpg" alt=""/>
                                                </a>
                                                <span>hot</span>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Navy Bird Print </a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/1.jpg" alt=""/>
                                                </a>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Homme Tapered Smart</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/2.jpg" alt=""/>
                                                </a>
                                                <span>hot</span>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Dagger Smart Trousers </a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/3.jpg" alt=""/>
                                                </a>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Mini Waffle 5 Pack </a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/4.jpg" alt=""/>
                                                </a>
                                                <span>hot</span>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Denim Stonewash</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/5.jpg" alt=""/>
                                                </a>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Navy Bird Print</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="home3" role="tabpanel">
                                <div className="custom-row">
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/3.jpg" alt=""/>
                                                </a>
                                                <span>hot</span>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Black Faux Suede</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/2.jpg" alt=""/>
                                                </a>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Leg Smart Trousers</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/1.jpg" alt=""/>
                                                </a>
                                                <span>hot</span>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Skinny Jeans Terry</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/5.jpg" alt=""/>
                                                </a>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Jacket Stonewash</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/4.jpg" alt=""/>
                                                </a>
                                                <span>hot</span>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Navy Bird Print</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/5.jpg" alt=""/>
                                                </a>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Homme Tapered Smart</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/4.jpg" alt=""/>
                                                </a>
                                                <span>hot</span>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Dagger Smart Trousers</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/2.jpg" alt=""/>
                                                </a>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Mini Waffle 5 Pack</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/2.jpg" alt=""/>
                                                </a>
                                                <span>hot</span>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Denim Stonewash</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/3.jpg" alt=""/>
                                                </a>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Navy Bird Print </a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="home4" role="tabpanel">
                                <div className="custom-row">
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/5.jpg" alt=""/>
                                                </a>
                                                <span>hot</span>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Navy Bird Print</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/3.jpg" alt=""/>
                                                </a>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Denim Stonewash </a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/4.jpg" alt=""/>
                                                </a>
                                                <span>hot</span>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Mini Waffle 5 Pack</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/2.jpg" alt=""/>
                                                </a>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Dagger Smart Trousers</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/1.jpg" alt=""/>
                                                </a>
                                                <span>hot</span>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Homme Tapered Smart</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/3.jpg" alt=""/>
                                                </a>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Navy Bird Print</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/5.jpg" alt=""/>
                                                </a>
                                                <span>hot</span>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Jacket Stonewash</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/1.jpg" alt=""/>
                                                </a>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Skinny Jeans Terry</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/2.jpg" alt=""/>
                                                </a>
                                                <span>hot</span>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Leg Smart Trousers</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/1.jpg" alt=""/>
                                                </a>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Black Faux Suede </a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="home5" role="tabpanel">
                                <div className="custom-row">
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/5.jpg" alt=""/>
                                                </a>
                                                <span>hot</span>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Black Faux Suede</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/1.jpg" alt=""/>
                                                </a>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Leg Smart Trousers</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/2.jpg" alt=""/>
                                                </a>
                                                <span>hot</span>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Skinny Jeans Terry</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/3.jpg" alt=""/>
                                                </a>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Jacket Stonewash</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/4.jpg" alt=""/>
                                                </a>
                                                <span>hot</span>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Navy Bird Print</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/3.jpg" alt=""/>
                                                </a>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Homme Tapered Smart</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/4.jpg" alt=""/>
                                                </a>
                                                <span>hot</span>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Dagger Smart Trousers</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/3.jpg" alt=""/>
                                                </a>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Mini Waffle 5 Pack </a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/2.jpg" alt=""/>
                                                </a>
                                                <span>hot</span>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Denim Stonewash</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-col-5 custom-col-style mb-65">
                                        <div className="product-wrapper">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img src="assets/img/product/fashion-colorful/1.jpg" alt=""/>
                                                </a>
                                                <div className="product-action">
                                                    <a className="animate-left" title="Wishlist" href="#">
                                                        <i className="pe-7s-like"></i>
                                                    </a>
                                                    <a className="animate-top" title="Add To Cart" href="#">
                                                        <i className="pe-7s-cart"></i>
                                                    </a>
                                                    <a className="animate-right" title="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h4><a href="product-details.html">Navy Bird Print</a></h4>
                                                <span>$115.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="brand-logo-area pl-100 pr-100">
            <div className="ptb-135 gray-bg">
                <div className="brand-logo-active owl-carousel">
                    <div className="single-brand">
                        <img src="assets/img/brand-logo/1.png" alt=""/>
                    </div>
                    <div className="single-brand">
                        <img src="assets/img/brand-logo/2.png" alt=""/>
                    </div>
                    <div className="single-brand">
                        <img src="assets/img/brand-logo/1.png" alt=""/>
                    </div>
                    <div className="single-brand">
                        <img src="assets/img/brand-logo/3.png" alt=""/>
                    </div>
                    <div className="single-brand">
                        <img src="assets/img/brand-logo/4.png" alt=""/>
                    </div>
                    <div className="single-brand">
                        <img src="assets/img/brand-logo/5.png" alt=""/>
                    </div>
                    <div className="single-brand">
                        <img src="assets/img/brand-logo/6.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="banner-area3 pt-120 pb-115">
            <div className="pl-100 pr-100">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-md-12 col-lg-4 col-xl-4">
                            <div className="banner-wrapper mrgn-negative">
                                <a href="#"><img src="assets/img/banner/8.jpg" alt=""/></a>
                                <div className="banner-wrapper2-content">
                                    <h3>Speatial </h3>
                                    <h2>Style</h2>
                                    <span>Start from $299.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-8 col-xl-8">
                            <div className="row g-0 banner-mrg">
                                <div className="col-md-6">
                                    <div className="banner-wrapper mrgn-b-5 mrgn-r-5 ">
                                        <img src="assets/img/banner/9.jpg" alt=""/>
                                        <div className="banner-wrapper3-content">
                                            <a href="#">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="banner-wrapper mrgn-b-5">
                                        <img src="assets/img/banner/10.jpg" alt=""/>
                                        <div className="banner-wrapper3-content banner-text-color">
                                            <a href="#">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="banner-wrapper mrgn-r-5">
                                        <img src="assets/img/banner/11.jpg" alt=""/>
                                        <div className="banner-wrapper3-content">
                                            <a href="#">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="banner-wrapper">
                                        <img src="assets/img/banner/12.jpg" alt=""/>
                                        <div className="banner-wrapper3-content">
                                            <a href="#">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="insta-feed ptb-120  gray-bg">
            <div className="pl-185 pr-185">
                <div className="section-title-2 text-center mb-50">
                    <h2>Insta Feed</h2>
                    <h4>Follow us on intagram. <span>@Ezonepro</span></h4>
                </div>
                <div className="instafeed-wrapper">
                    <div className="instafeed-active owl-carousel">
                        <div className="instafeed-img">
                            <img src="assets/img/instra/1.jpg" alt=""/>
                        </div>
                        <div className="instafeed-img">
                            <img src="assets/img/instra/2.jpg" alt=""/>
                        </div>
                        <div className="instafeed-img">
                            <img src="assets/img/instra/3.jpg" alt=""/>
                        </div>
                        <div className="instafeed-img">
                            <img src="assets/img/instra/4.jpg" alt=""/>
                        </div>
                        <div className="instafeed-img">
                            <img src="assets/img/instra/5.jpg" alt=""/>
                        </div>
                        <div className="instafeed-img">
                            <img src="assets/img/instra/2.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <footer className="footer-area">
            <div className="footer-top-area bg-img pt-105 pb-65" style="background-image: url(assets/img/bg/1.jpg)" data-overlay="9">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-3">
                            <div className="footer-widget mb-40">
                                <h3 className="footer-widget-title">Custom Service</h3>
                                <div className="footer-widget-content">
                                    <ul>
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="register.html">My Account</a></li>
                                        <li><a href="login.html">Login</a></li>
                                        <li><a href="register.html">Register</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Track</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-3">
                            <div className="footer-widget mb-40">
                                <h3 className="footer-widget-title">Categories</h3>
                                <div className="footer-widget-content">
                                    <ul>
                                        <li><a href="shop.html">Dress</a></li>
                                        <li><a href="shop.html">Shoes</a></li>
                                        <li><a href="shop.html">Shirt</a></li>
                                        <li><a href="shop.html">Baby Product</a></li>
                                        <li><a href="shop.html">Mans Product</a></li>
                                        <li><a href="shop.html">Leather</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="footer-widget mb-40">
                                <h3 className="footer-widget-title">Contact</h3>
                                <div className="footer-newsletter">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is dummy.</p>
                                    <div id="mc_embed_signup" className="subscribe-form pr-40">
                                        <form action="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                                            <div id="mc_embed_signup_scroll" className="mc-form">
                                                <input type="email" value="" name="EMAIL" className="email" placeholder="Enter Your E-mail" required/>
                                                
                                                <div className="mc-news" aria-hidden="true">
                                                    <input type="text" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" tabindex="-1" value=""/>
                                                </div>
                                                <div className="clear">
                                                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="footer-contact">
                                        <p><span><i className="ti-location-pin"></i></span> 77 Seventh avenue USA 12555. </p>
                                        <p><span><i className=" ti-headphone-alt "></i></span> +88 (015) 609735 or +88 (012) 112266</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom black-bg ptb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="copyright">
                                <p>
                                    Copyright ©
                                    <a href="hastech.company/">HasTech</a> 2021 . All Right Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-hidden="true">
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span className="pe-7s-close" aria-hidden="true"></span>
            </button>
            <div className="modal-dialog modal-quickview-width" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="qwick-view-left">
                            <div className="quick-view-learg-img">
                                <div className="quick-view-tab-content tab-content">
                                    <div className="tab-pane active show fade" id="modal1" role="tabpanel">
                                        <img src="assets/img/quick-view/l1.jpg" alt=""/>
                                    </div>
                                    <div className="tab-pane fade" id="modal2" role="tabpanel">
                                        <img src="assets/img/quick-view/l2.jpg" alt=""/>
                                    </div>
                                    <div className="tab-pane fade" id="modal3" role="tabpanel">
                                        <img src="assets/img/quick-view/l3.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="quick-view-list nav" role="tablist">
                                <a className="active" href="#modal1" data-bs-toggle="tab" role="tab" aria-selected="true" aria-controls="home1">
                                    <img src="assets/img/quick-view/s1.jpg" alt=""/>
                                </a>
                                <a href="#modal2" data-bs-toggle="tab" role="tab" aria-selected="false" aria-controls="home2">
                                    <img src="assets/img/quick-view/s2.jpg" alt=""/>
                                </a>
                                <a href="#modal3" data-bs-toggle="tab" role="tab" aria-selected="false" aria-controls="home3">
                                    <img src="assets/img/quick-view/s3.jpg" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="qwick-view-right">
                            <div className="qwick-view-content">
                                <h3>Handcrafted Supper Mug</h3>
                                <div className="price">
                                    <span className="new">$90.00</span>
                                    <span className="old">$120.00  </span>
                                </div>
                                <div className="rating-number">
                                    <div className="quick-view-rating">
                                        <i className="pe-7s-star"></i>
                                        <i className="pe-7s-star"></i>
                                        <i className="pe-7s-star"></i>
                                        <i className="pe-7s-star"></i>
                                        <i className="pe-7s-star"></i>
                                    </div>
                                    <div className="quick-view-number">
                                        <span>2 Ratting (S)</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do tempor incididun ut labore et dolore magna aliqua. Ut enim ad mi , quis nostrud veniam exercitation .</p>
                                <div className="quick-view-select">
                                    <div className="select-option-part">
                                        <label>Size*</label>
                                        <select className="select">
                                            <option value="">- Please Select -</option>
                                            <option value="">900</option>
                                            <option value="">700</option>
                                        </select>
                                    </div>
                                    <div className="select-option-part">
                                        <label>Color*</label>
                                        <select className="select">
                                            <option value="">- Please Select -</option>
    ss                                        <option value="">orange</option>
                                            <option value="">pink</option>
                                            <option value="">yellow</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="quickview-plus-minus">
                                    <div className="cart-plus-minus">
                                        <input type="text" value="02" name="qtybutton" className="cart-plus-minus-box"/>
                                    </div>
                                    <div className="quickview-btn-cart">
                                        <a className="btn-hover-black" href="#">add to cart</a>
                                    </div>
                                    <div className="quickview-btn-wishlist">
                                        <a className="btn-hover" href="#"><i className="pe-7s-like"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    
    
    
      
       
        </React.Fragment>
    )
}
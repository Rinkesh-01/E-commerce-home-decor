import React from "react";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

const Header = () => {
  return (
    <>
      <div className="heder">
        <div className="main-banner-container">
          <div className="header-inner">
            <hr />

            {/* <div className="header-center">
              <div className="container">
                <div className="header-center-inner">
                  <div className="all-item">
                    <div className="img1">
                      <img src="/img/logo-home.png" alt="" />
                    </div>
                    <div className="content1">
                      <div className="img">
                        <img src="/img/logo.png" alt="" />
                      </div>
                      <div className="img-content">
                        <span>Free Shipping Order Over $1000 </span>
                      </div>
                    </div>
                    <div className="content2">
                      <div className="img">
                        <img src="/img/logo1.png" alt="" />
                      </div>
                      <div className="img-content">
                        <span> We Support - 27/7 </span>
                      </div>
                    </div>
                    <div className="content3">
                      <div className="icon">
                        
                        <PiShoppingCartSimpleLight />
                      </div>
                      <div className="img-content">
                        <span>My Cart - 0 Item(s)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="navbar">
              <div className="container">
                <div className="navbar-inner">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>{" "}
                    </li>
                    <li>
                      <a href="#">shop </a>
                      <ul className="mega-menu">
                        <li>
                          <h4>fashion</h4>
                          <ul className="mega-item">
                            <li>
                              <a href="#">men</a>
                            </li>
                            <li>
                              <a href="#">woman</a>
                            </li>
                            <li>
                              <a href="#">kids</a>
                            </li>
                            <li>
                              <a href="#">accessorices</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h4>jawellery</h4>
                          <ul className="mega-item">
                            <li>
                              <a href="#">ring</a>
                            </li>
                            <li>
                              <a href="#">bracelets</a>
                            </li>
                            <li>
                              <a href="#">necklaces</a>
                            </li>
                            <li>
                              <a href="#">wedding bands</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h4>farniture</h4>
                          <ul className="mega-item">
                            <li>
                              <a href="#">living room</a>
                            </li>
                            <li>
                              <a href="#">kitchan</a>
                            </li>
                            <li>
                              <a href="#">office</a>
                            </li>
                            <li>
                              <a href="#">home decor</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h4>autoparts</h4>
                          <ul className="mega-item">
                            <li>
                              <a href="#">enging parts</a>
                            </li>
                            <li>
                              <a href="#">exhaust parts</a>
                            </li>
                            <li>
                              <a href="#">brake parts</a>
                            </li>
                            <li>
                              <a href="#">body parts</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">electronics </a>
                      <ul className="mega-menu-two">
                        <li>
                          <h4>mobiles</h4>
                          <ul className="mega-item">
                            <li>
                              <a href="#">apple</a>
                            </li>
                            <li>
                              <a href="#">blackbary</a>
                            </li>
                            <li>
                              <a href="#">one plus</a>
                            </li>
                            <li>
                              <a href="#">sony</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <h4>cameras</h4>
                          <ul className="mega-item">
                            <li>
                              <a href="#">dslr</a>
                            </li>
                            <li>
                              <a href="#">lences</a>
                            </li>
                            <li>
                              <a href="#"> tripods</a>
                            </li>
                            <li>
                              <a href="#">batteries</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Sports&Books </a>

                      <ul className="mega-menu-two">
                        <li>
                          <h4>sports</h4>
                          <ul className="mega-item">
                            <li>
                              <a href="#">football</a>
                            </li>
                            <li>
                              <a href="#">vollayball</a>
                            </li>
                            <li>
                              <a href="#"> cricket</a>
                            </li>
                          </ul>
                        </li>
                        {/* <li>
                          <h4>books</h4>
                          <ul className="mega-item">
                            <li>
                              <a href="#">Literature</a>
                            </li>
                            <li>
                              <a href="#"> Philosophy</a>
                            </li>
                            <li>
                              <a href="#">Academics</a>
                            </li>
                          </ul>
                        </li> */}
                      </ul>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <div className="serch">
                      {/* <i id="abc"
                                            // style="margin-top: 25px;  font-size: 20px;  color: white; "
                                            class="fa-solid fa-magnifying-glass fa-xs"></i> */}
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

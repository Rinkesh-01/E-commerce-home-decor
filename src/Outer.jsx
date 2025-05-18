import React from "react";


const Outer = () => {
    return(
        <>
        <div className="main-banner">
    <div className="main-banner-container">
      <div className="main-banner-inner">
        <div className="item">
          <div className="item-inner">
            <div className="img">
              <img src="/img/mainbanner.jpg" alt=""/>
            </div>
            <div className="text">
              <p>up to <strong>30</strong> % off <br/>sale going on <span> printed sofa</span>
              <p className="mini-text"> Reflecting your image</p>
              </p>
              <a href="#">shop today</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}
export default Outer;
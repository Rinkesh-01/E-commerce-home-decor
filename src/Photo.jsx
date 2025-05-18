import React from "react";

const Photo = () => {

    return(
        <>
         <div className="main-photo">
        <div className="photo-container">
          <div className="main-photo-inner">
            <div className="left-item">
              <div className="left-item-inner">
                <div className="img">
                  <img src="/img/frist.jpg" alt=""/>
                </div>
                <div className="photo-text">
                  <strong>Christmas sale on armchair</strong>
                  <p>20% off on selected items</p>
    
                </div>
              </div>
            </div>
            <div className="middal-item">
              <div className="middal-item-inner">
                <div className="img">
                  <img src="/img/second.jpg" alt=""/>
                </div>
                <div className="photo-text">
                  <strong>Low cost designer dining</strong>
                  <p>get the best deal today!</p>
                </div>
              </div>
            </div>
            <div className="right-item">
              <div className="right-item-inner">
                <div className="img">
                  <img src="/img/third.jpg" alt=""/>
                </div>
                <div className="photo-text">
                  <strong>Office space solutions</strong>
                  <p>get expert opinion for furniture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
        </>
    )
}
export default Photo;
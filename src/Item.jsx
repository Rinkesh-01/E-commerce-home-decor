import React from "react";

const Item = (a) => {
    return (
        <>
            <div className="item">
                <div className="item-inner">
                    <div className="img">
                        <img src={a.img} alt="" />
                    </div>
                    <a href="#">{a.a} </a>
                    <p>{a.p}</p>
                </div>
            </div>
        </>
    )
}
export default Item;

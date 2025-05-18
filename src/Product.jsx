import React from "react";

const Product = () => {
    return (
        <>
            <div className="main-product">
                <div className="container">
                    <div className="main-product-inner">
                        <div className="title">
                            <h2>new product</h2>
                        </div>
                        <div className="all-product">
                            <div className="product">
                                <div className="product-inner">
                                    <div className="img">
                                        <img src="/img/bad.jpg" alt="" />
                                        <div className="text-btn">
                                            <a className="btn" href="#">Quick view</a>
                                        </div>
                                    </div>
                                    <div className="img-text">
                                        <a href="#">eius tempora </a>
                                        <p>$379.00</p>
                                        <a id="img-btn" href="#">Add To Cart</a>
                                    </div>
                                    <label className="label">
                                        <div className="content1">new</div>
                                        <div className="content2">on sale!</div>
                                    </label>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product-inner">
                                    <div className="img">
                                        <img src="/img/table.jpg" alt="" />
                                        <div className="text-btn">
                                            <a className="btn" href="#">Quick view</a>
                                        </div>
                                    </div>
                                    <div className="img-text">
                                        <a href="#">porro quisquam </a>
                                        <p>$319.00</p>
                                        <a id="img-btn" href="#">Add To Cart</a>
                                    </div>
                                    <label className="label">
                                        <div className="content1">new</div>
                                        <div className="content2">on sale!</div>
                                    </label>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product-inner">
                                    <div className="img">
                                        <img src="/img/dianigtable.jpg" alt="" />
                                        <div className="text-btn">
                                            <a className="btn" href="#">Quick view</a>
                                        </div>
                                    </div>
                                    <div className="img-text">
                                        <a href="#">architecto beatae </a>
                                        <p>$359.00</p>
                                        <a id="img-btn" href="#">Add To Cart</a>
                                    </div>
                                    <label className="label">
                                        <div className="content1">new</div>
                                    </label>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product-inner">
                                    <div className="img">
                                        <img src="/img/sofa.jpg" alt="" />
                                        <div className="text-btn">
                                            <a className="btn" href="#">Quick view</a>
                                        </div>
                                    </div>
                                    <div className="img-text">
                                        <a href="#">reprehenderi beatae</a>
                                        <p>$359.00</p>
                                        <a id="img-btn" href="#">Add To Cart</a>
                                    </div>
                                    <label className="label">
                                        <div className="content1">new</div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Product;
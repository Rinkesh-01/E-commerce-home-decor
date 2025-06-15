import React from "react";
import Outer from './Outer';
import Category from './Category';
import Adblock from './Ad-block';
import Product from './Product';
import Brand from './Brand';
import Collection from './Collection';
import Photo from './Photo';
import Item from "./Item";

const Home = () => {
    return (
        <>
             <Outer />
            <Category />
            <Adblock />
            <Product />
            <Photo />
            <Collection />
            <Brand /> 
            
        </>
    )
}
export default Home;
import React, { useState } from "react";

const Demo = (e) => {
    // var [str, setStr] = useState("hello");

    // const Hooks = () => {
    // setStr("Hiii");
    // }
    // return (
        // <>
            /* <h2>{str}</h2>
            <button onClick={Hooks}>click</button> */

        // </>
    // )
    var [data,setdata] = useState('')
    const Demo = (e) => {
        setdata(e.target.value);
    }

    return(
        <>
        <h2>{data}</h2>
        <input type="text" onChange={Demo}></input>
        </>
    )


}
export default Demo;
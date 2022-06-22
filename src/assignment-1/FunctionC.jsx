import React,{useState} from "react";
import "./ass1.css";
function FunctionC()
{
    const[print,Prnt] = useState(false);
    return(
        <div id="container1">
            <button id="b1" onClick={()=>Prnt(!print)}>To see styling in functional component</button>
            {
                print ? <div id="functionBlock">
                    <h1 id="bh">This is created using functional Component</h1>
                    <h2>this is done using external CSS</h2>
                    <h2 style={{color:'blue'}}>this is done using inline CSS</h2>
                </div>
                : null 
            }
        </div>
    );
}
export default FunctionC;
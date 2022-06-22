import "./ass1.css";
import React from "react";
function Assignment1()
{
            const container = document.getElementById("root");
            
            const funcC =(props1) =>
            {
                
                console.log("you clicked function");
                const d1 = document.createElement("div");
                // d1.className = "functionBlock";
                d1.setAttribute("id","functionBlock");
               
               
                // d1.innerHTML = "This is created using functional Component";
                // d1.innerHTML = "this is done using external CSS";
                // d1.innerHTML = "this is done using inline CSS";
                const d2 = document.createElement("h1");
                d2.innerText = "This is created using functional Component";
                const d3 = document.createElement("h3");
                d3.innerText = "this is done using external CSS";
                const d4 = document.createElement("h3");
                d4.innerText = "this is done using inline CSS";
                d4.style.color = "blue";
                d1.appendChild(d2);
                d1.appendChild(d3);
                d1.appendChild(d4);
                container.appendChild(d1);
                d1.classList.toggle(d1);
                
                // <h2>hello </h2>
                // return(
                // <div id="func">
                //     <h2>This is created using functional Component</h2>
                // </div>
                // );
            };
            // function deleteF()
            // {
            //     const del = document.getElementById("functionBlock");
            //     del.parentNode.removeChild(del);
            // }
            const classC = (props2) =>
            {
                // const {line1,line2,line3} = props2;
                console.log("you clicked classs");
                const c1 = document.createElement("div");
                const c2 = document.createElement("h1");
                const c3 = document.createElement("h3");
                const c4 = document.createElement("h3");
                c1.className = "classBlock";
                c2.innerText = "This is created using Class Component";
                c3.innerText = "this is done using external CSS";
                c4.innerText = "this is done using inline CSS";
                c4.style.color = "blue";
                c1.appendChild(c2);
                c1.appendChild(c3);
                c1.appendChild(c4);
                container.appendChild(c1);
                return(
                    <div id="clas">
                        <h2>This is created using Class Component</h2>
                        {/* <p>{line2}</p>
                    <p> {line3} </p> */}
                    </div>
                );
            };
            
              
                   
    return (
        <div id="container">
            <h1>Styling using Functional and Class component</h1>
            <div id="item1">
                <button id="b1" onClick={funcC}>To see styling in functional component</button>
            </div>
            <div id="item2">
                <button onClick={classC} id="b2">To see styling in class component</button>
            </div>
            <div id="block1"></div>
        </div>

    );

};
export default Assignment1;
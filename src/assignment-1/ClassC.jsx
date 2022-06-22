import React,{Component} from "react";
import "./ass1.css";
class ClassC extends Component
{
    constructor()
    {
        super()
        this.state = {
            print : false ,
        }
    }
    Instruction = ()=>
    {
      this.setState(
        {
            print : !this.state.print,
        }
      )
    }
    render()
    {
        return(
            <div id="container2">
            {
                this.state.print ? <div id="classBlock">
                    <h1 id="bh">This is created using Class Component</h1>
                    <h2>this is done using external CSS</h2>
                    <h2 style={{color:"blue"}}>this is done using inline CSS</h2>
                </div> 
                : null
                
            }
            <button id="b2" onClick={()=>this.Instruction()}>To see styling in class component</button>
            </div>
        );
    }
}

export default ClassC;
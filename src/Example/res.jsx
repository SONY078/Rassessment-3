import React, { Component } from 'react'

export default class Data extends Component {
  render() {
    return (
      <>
         <div className="container">
         <div className="header"><h1>FEEDBACK PAGE</h1></div>
             <br /><br />

            <div className="box feedback">
             {this.props.feedback.map((item,index)=>{
                return(
               <div key={index} className='inside' >
               Name : {item.name} | Department :  {item.dept} | Rating {item.rating}
      
              </div>
                ) 
                })}
            </div> 
            <div>
                <button onClick={this.props.toggleFunc} className='butn'> GO BACK</button>
            </div>
            </div>
      </>
    )
  }
}
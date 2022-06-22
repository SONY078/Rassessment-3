import React, { Component } from 'react'

class NewPageData extends Component {
  constructor(props){
    super(props)
    console.log(props.data)

  }
  change(){
    console.log(this.props.stateobj);
    
    this.props.statechange();
    
    }
  
  render() {
    return (
      <div className='complete'>
     
   
      <div className='data-container'>
      {this.props.data.length > 1 && this.props.data.map((e) =>  {
        return (<div className='data'>
          <h1> name:{e.name} |department: {e.department} | rating:{e.rating}</h1>
        </div>)

      })}

  </div>
  <button onClick={this.change.bind(this)} style={{marginLeft:"250px"}}>GO BACK</button>
  </div>
    )
  }
}

export default NewPageData;
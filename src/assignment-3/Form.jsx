import React, { Component } from 'react'
import NewPageData from './Re.jsx';
class Form extends Component {
  state = {
    name : "",
    department: "",
    rating :"",
    arr : [],
    showBOX: true,
    showFeedback : false
    
}
OnSubmit(e){
  e.preventDefault();

  const tempObj = {
    name : this.state.name,
    department : this.state.department,
    rating : this.state.rating
  } 
  this.state.arr.push(tempObj)
  this.setState({
    name : "",
    department : "",
    rating : "",
    showBOX: false,
    showFeedback : true

  })

  

}

handlestateChange = (e) => {
  this.setState({
    showBOX: true,
    showFeedback : false
  })

}

  render() {
    return (
      <>
      {this.state.showBOX && 
      <>
          <form>
          <label >Name : </label>
          <input type = "text" id='name' value={this.state.name} onChange = {(event) => {this.setState({name : event.target.value})}} /> <br></br>
          <label >Department : </label>
          <input type = "text" id='department' value={this.state.department} onChange = {(event) => {this.setState({department : event.target.value})}} /> <br></br>
          <label>Rating : </label>
          <input type = "number" id='rating' value={this.state.rating} onChange = {(event) => {this.setState({rating : event.target.value})}} /> <br></br>
          </form> <br></br>
          <button type='submit' onClick={this.OnSubmit.bind(this)}>SUBMIT</button>
     </> }
      {this.state.showFeedback && <NewPageData data = {this.state.arr} stateobj = {this.state} statechange = {this.handlestateChange}/>}
      
      </>
     
     
    )
  }
}

export default Form;
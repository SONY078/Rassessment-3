import './App.css';
import React, { Component } from 'react'
import "./assignment-3/sty.css"
import Data from './assignment-3/ResultData';

class App extends Component {
  state={
      name:"",
      department:"",
      rating:"",
      user:[],
      viewDetails: true,
  }


  ButtonChange=(element)=>{
      this.setState({
      [element.target.name]:element.target.value
  })
  }

  ButtonSubmit=(element)=>{
      element.preventDefault()
      console.log(this.state);

      var tempArr=[]
      console.log(tempArr);
      var tempObj={
      name: this.state.name,
      dept: this.state.departmentt,
      rating: this.state.rating
      }

      tempArr=this.state.user
      tempArr.push(tempObj)
      this.setState({user:tempArr})
      this.setState({name:'',dept:'',rating:''})
      this.setState({viewDetails: !this.state.viewDetails})
      console.log(this.state.user);
  }

   BackFile = ()=>{
    this.setState({viewDetails: !this.state.viewDetails});
  }

render() {
  return (
    <>    
      {this.state.viewDetails?
      <div className="container">
      <div className="header"><h1>EMPLOYEEE FEEDBACK FORM</h1></div>
      <form  onSubmit={this.ButtonSubmit} className='form_part'>
          <label>Name:</label>
          <input type="text" name="name" autoComplete='off'   className='inpt_form' value={this.state.name} onChange={this.ButtonChange} /><br /><br/><br/>
          <label>Department:</label>
          <input type="text" name="department" autoComplete='off' className='inpt_form'  value={this.state.departmentt} onChange={this.ButtonChange} /><br /><br/><br/>
          <label>Rating:</label>
          <input type="text" name="rating" autoComplete='off' className='inpt_form'  value={this.state.rating} onChange={this.ButtonChange} /><br /><br/><br/>
          <button className='button' onClick={this.ButtonSubmit}>submit</button>
      </form>
      

    </div> 
    : <Data feedback={this.state.user}  toggleFunc={this.BackFile} />
    }

    </>
  )
}
}

export default App;

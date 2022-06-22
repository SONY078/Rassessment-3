// import { useState,setState } from "react";
import React from "react";
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '',
                    udept: '',
                    urating:''};
      

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
  
    handleChange(event) {
    //   this.setState({value: event.target.value});
    //   this.setState({udept: event.target.udept});
    //   this.setState({urating: event.target.urating});

    }
  
    handleSubmit(event) {
    //   alert('A name was submitted: ' + this.state.value);
    const block = document.getElementById("blockConatiner");
    const d = document.createElement("div");
    d.setAttribute("id","block")
    d.append("Name:",this.state.value);
    d.append("Department:",this.state.udept);
    d.append("Rating:",this.state.urating);
    block.appendChild(d);
    // document.write("name is:",+ this.state.uname);
    // document.write("department is:",+ this.state.udept);
    // document.write("rating is:",+ this.state.urating);
      event.preventDefault();
    }
  
    render() {
      return (
        <div id="conatiner">
        <form onSubmit={this.handleSubmit}>
          <label>
            &emsp;&emsp;&nbsp;&nbsp;&nbsp;Name:
            <input type="text"  value={this.state.value} onChange={this.handleChange} />
          </label>
          <br/><br/>
          <label>
            Department:
            <input type="text"  value={this.state.udept} onChange={this.handleChange} />
          </label>
          <br/><br/>
          <label>
            &emsp;&emsp;&nbsp;&nbsp;&nbsp;Rating:
            <input type="number"  value={this.state.urating} onChange={this.handleChange} />
          </label><br/><br/>
          <input type="submit" value="Submit" />
        </form>
        <div id="blockConatiner"></div>
        </div>
      );
    }
  }
  export default NameForm;
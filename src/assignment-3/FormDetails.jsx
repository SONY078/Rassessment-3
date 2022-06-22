import React from "react";
class FormDetails extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            name : "",
            dept : "",
            rating: ""
        };
        this.handleChage = this.handleChage.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
    }
    handleChage(event)
    {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState(
            {
                [name]: value
            }
        );
    }
    handelSubmit(event)
    {
        event.preventDefault();
        console.log(this.state.name);
        console.log(this.state.dept);
        console.log(this.state.rating);
        document.write(this.state.name);
    }
    render()
    {
        return(
          <div id="container">
            <form onSubmit={this.handelSubmit}>
                <h1>Employee Form</h1>
                <label>
                    Name:
                    <input type="text" name="name" id="" onChange={this.handleChage} />
                </label><br/>
                <label>
                    Department:
                    <input type="text" name="dept" id="" onChange={this.handleChage} />
                </label><br/><br/>
                <label>
                    Rating:
                    <input type="number" name="rating" id="" onChange={this.handleChage} />
                </label>
                <input type="submit" value="submit" />
            </form>
          </div>  
        );
    }
}
export default FormDetails;
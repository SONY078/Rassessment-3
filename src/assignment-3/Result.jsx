import React from "react";

class Result extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log(props);
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}
export default Result;
import React, { Component } from 'react'

export class Goodslist extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.match.params.id);
        const temp= this.props.match.params.id.split("_")
        console.log(temp);
    }
}

export default Goodslist

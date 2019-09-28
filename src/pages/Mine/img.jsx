import React, { Component } from 'react'

export class Img extends Component {
    render() {
        return (
            <div
                style={{ height: "100vh", display: "flex", alignItems: "center" }}
                onClick={() => void this.props.history.goBack()}
            >
                <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2632329412,813798018&fm=26&gp=0.jpg" style={{ width: "100%" }} alt="" />
            </div>
        )
    }
}

export default Img

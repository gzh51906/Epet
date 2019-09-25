import React, { Component } from 'react'

export class Box extends Component {
    render() {
        const{children,tlt,style}=this.props
        return (
            <div style={style}>
                <h2>{tlt}</h2>
                {children}
            </div>
        )
    }
}

export default Box

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import * as action from '../store/createaction';
import './categorys.css';
export class Categorys extends Component {

    render() {
        const { style, categorys, onClick, history, match, index, changei } = this.props
        return (
            <div className="categorys" style={style} onClick={onClick ? onClick : () => false}>
                {
                    categorys ?
                        <ul>
                            {categorys.map((v, i) => (
                                <li onClick={() => {
                                    history.push(`${match.path}/categorys/${i + 1}`)
                                    changei(i)
                                }} key={v.name} className={index === i ? "active" : ""}>{v.name} </li>
                            ))}
                        </ul> :
                        ""
                }
            </div>
        )
    }
    componentDidMount() {

        const { location, changei, history, match } = this.props
        let index = location.pathname.split("/").pop() - 1
        if (isNaN(index)) {
            index = 0
        }
        history.push(`${match.path}/categorys/${index + 1}`)
        changei(index)
    }
}
const mapState = v => ({
    index: v.list.index,
    categorys: v.list.categorys
})
const mapDispatch = v => ({
    changei(i) {
        if (i) {
            v(action.changei(i))
            v(action.getshowlist(i + 1))
        } else {
            v(action.changei(0))
            v(action.getshowlist(1))
        }
    }
})
export default withRouter(connect(mapState, mapDispatch)(Categorys))

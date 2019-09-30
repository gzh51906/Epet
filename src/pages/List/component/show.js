import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as action from '../store/createaction';
import './show.css';
export class Show extends Component {
    render() {

        const { show, history } = this.props
        return (
            <div style={{ height: "100%", flex: "1", overflow: "auto", borderLeft: "4px #f3f4f5 solid" }}>
                {show.map(v => {
                    return (
                        <div key={v.title}>
                            <span style={{ lineHeight: "40px", paddingLeft: "1em", color: "#b3a6c4" }}>{v.title}</span>
                            <ul style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap", paddingBottom: "50px" }}>
                                {v.list.map(item => (
                                    <li
                                        style={{ display: "flex", flexDirection: "column", alignItems: "center", width: v.title === "热门品牌" ? "50%" : "30%", height: "100px" }}
                                        onClick={() => {
                                            // if(v.title==="热门品牌"){
                                            //     if(item.target.mode==="brand_homepage"){
                                            //         console.log(item.target.param);
                                            //         history.push(`/goodsstore/${item.target.param}`)
                                            //     }else{
                                            //         console.log(item.target.param);
                                            //         history.push(`/goodslist/${item.target.param}`)
                                            //     }
                                            // }else{
                                            //     console.log(item.id_param)
                                            //     history.push(`/goodslist/${item.id_param}`)
                                            // }
                                            history.push(`/Goodslistl`)
                                        }}
                                        key={item.name}>
                                        {
                                            v.title === "热门品牌" ?
                                                <>
                                                    <img src={item.logo} style={{ height: "70%" }} alt="" />
                                                    <span>{item.name}</span></> :
                                                <>
                                                    <img src={item.photo} style={{ width: "70%" }} alt="" />
                                                    <span>{item.name}</span></>
                                        }
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                })}
            </div>
        )
    }
    componentDidMount() {
        const { match, fetchdata } = this.props
        if (match.params.index) {
            fetchdata(match.params.index)
        }
    }
}
const mapState = v => ({
    show: v.list.show
})
const mapDispatch = v => ({
    fetchdata(i) {
        v(action.getshowlist(i))
    }
})
export default connect(mapState, mapDispatch)(Show)

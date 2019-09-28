import React, { Component } from 'react'
import Categorys from './component/categorys';
import Show from './component/show';
import { connect } from 'react-redux'
// import { Route, Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import * as action from './store/createaction';
export class List extends Component {
    render() {
        const { path } = this.props.match
        const { categorys } = this.props
        return (
            <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
                <h3 style={{ height: "7vh", textAlign: "center", lineHeight: "7vh", boxSizing: "border-box", borderBottom: "2px #eee solid" }}>分类</h3>
                <div style={{ display: "flex", flex: "1", overflow: "hidden" }}>
                    <Categorys style={{ height: "100%", width: "20%" }} categorys={categorys}></Categorys>
                    <Route path={path + "/categorys/:index"} component={Show} exact />
                    <Route path={path} component={Show} exact />
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.fetchcategory()
    }
}

const mapState = v => ({
    categorys: v.list.categorys
})
const mapDispatch = v => ({
    fetchcategory() {
        v(action.getcategorys())
    }
})
export default connect(mapState, mapDispatch)(List)


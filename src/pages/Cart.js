import React, { Component } from "react"
import { Icon } from "antd-mobile"
import '../style/cart.css'
class Cart extends Component {
    state = {
        val: 1

    }
    onChange = (val) => {
        this.setState({ val });
    }

    render() {
        return (
            <>
                <div className="cart">
                    <div className="head ">
                        <Icon type='left'          //返回
                            style={{ float: "left", marginTop: 15 }}
                            onClick={() => {
                                this.props.history.go(-1)
                            }} />
                        <span>购物车</span>
                    </div>
                    <div style={{ marginTop: 50 }} ></div>
                    <div className="clear margin " >
                        <div className="fl left">
                            <input type="checkbox" className="vertical" />
                            <img src="https://img2.epetbar.com/2018-12/27/14/2b053cad88783e3faf750901d9b7b1a4.jpg@!200w-b" className="image" alt=""></img>
                        </div>
                        <div className="fl right">
                            <p className="c333" >
                                <span >比乐 低敏无谷配方子母犬原味奶糕粮1.5kg</span>
                            </p>
                            <b className="mr3" >
                                <span className="ft12" >¥</span>
                                <span className="ft15 bold" >149.00</span>
                            </b>
                            <div className="buynum-wrap  fr" >
                                <button className="fl lrb lb" >─</button>
                                <input className="fl buynum-text " type="center" />
                                <button className="fl lrb rb" >+</button>
                            </div>
                            <div className="clear fr">
                                <button className="btn" >删除</button>
                            </div>
                        </div>
                    </div>

                    <div className="clear margin " >
                        <div className="fl left">
                            <input type="checkbox" className="vertical" />
                            <img src="https://img2.epetbar.com/2018-12/27/14/2b053cad88783e3faf750901d9b7b1a4.jpg@!200w-b" className="image" alt=""></img>
                        </div>
                        <div className="fl right">
                            <p className="c333" >
                                <span >比乐 低敏无谷配方子母犬原味奶糕粮1.5kg</span>
                            </p>
                            <b className="mr3" >
                                <span className="ft12" >¥</span>
                                <span className="ft15 bold" >149.00</span>
                            </b>
                            <div className="buynum-wrap  fr" >
                                <button className="fl lrb lb" >─</button>
                                <input className="fl buynum-text " type="center" />
                                <button className="fl lrb rb" >+</button>
                            </div>
                            <div className="clear fr">
                                <button className="btn" >删除</button>
                            </div>
                        </div>
                    </div>


                    <div style={{ marginBottom: 50 }} ></div>
                    <div className="footer">
                        <input type="checkbox" />
                        <span >总额：</span>
                        <button className="btn fr">结算</button>
                    </div>
                </div>
            </>
        )
    }

}

export default Cart;
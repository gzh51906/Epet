import React, { Component } from 'react';
import { Toast } from 'antd-mobile'
import axios from '../../node_modules/axios';
import url from '../axios'
import '../style/details.css'
class Details extends Component {
    state = {
        m: [],     //商品数据
        qty: null, //商品总数
        val: 1     //input的默认值
    }
    //返回上一页
    go = () => {
        this.props.history.go(-1)
    }
    //input的加减改变
    add = () => {
        this.setState({
            val: this.state.val + 1
        })
    }
    reduce = () => {
        if (this.state.val > 1)
            this.setState({
                val: this.state.val - 1
            })

    }
    change = (e) => {
        // console.log(e.target.value)
        if (!e.target.value || e.target.value < 1) {
            this.setState({
                val: 1
            })
            Toast.info('数量最少应为1', 1);
        }
        else {
            this.setState({
                val: e.target.value * 1
            })
        }
    }
    //添加到购物车
    add2cart = async () => {
        let { photo: src, subject: title, sale_price: price } = this.state.m;
        let num = this.state.val;
        let { id: gid } = this.props.match.params;
        //console.log({ src, title, price, num }) //把这些数据写进数据库
        if (src) {
            let { data: { qty } } = await axios.post(url + '/Egoods/details', {
                src, title, price, num, gid
            })
            this.setState({
                qty
            })
            if (qty) {
                Toast.info('添加成功', 1);
            }
        } else {
            Toast.info('点击过快，请稍后再试', 1)
        }
    }
    //通过传过来的商品id获得商品信息，顺便获取了商品的总数
    async componentDidMount() {
        let { id } = this.props.match.params;
        // console.log(id)
        let { data: data } = await axios.get(url + '/Egoods/details', {
            params: {
                gid: id
            }
        })
        // console.log(data)
        let msg = data.data[0].list
        // console.log(msg)
        let goodsPic = msg.filter(item => {
            return item.gid == id
        })
        // console.log(goodsPic[0])
        this.setState({
            m: goodsPic[0],
            qty: data.qty,    //总的商品数量
        })
    }
    render() {
        let good = this.state.m
        return (
            <>
                <div className="header" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
                    <header className="ftc head-top bgfff zcolor rela" >
                        <span className="aback page-top go-back left-more" onClick={this.go}></span>
                        <span className="right-more"></span>
                    </header>
                </div>
                <div style={{ width: 10, height: 50 }}></div>
                <div className="detail">
                    <div className="content">
                        <div className="wrap pro-exhibition">
                            <div className="bgfff">
                                <div className="swiper-container my-swiper swiper-container-horizontal">
                                    <div className="swiper-wrapper">
                                        <img className="head-img" src={good.photo} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="bgfff pb10">
                                <p className="pro-info ft13">
                                    {good.subject}
                                </p>
                                <p className="pro-desc ft13 ellipsis w100" style={{ width: '80%' }}>
                                    {good.presubject}
                                </p>
                                <div className="price-origin bgfff">
                                    <div className="price bdt">
                                        <span className="span-haf pro-price">
                                            <span className="now-yuan">￥</span>
                                            <span className="now-price mr10">{good.sale_price}</span>
                                            <span className="origin-yuan">￥</span>
                                            <span className="origin-price">{good.market_price}</span>
                                        </span>
                                        <span className="span-haf pro-origin">
                                            <img className="price-right-img" src="https://static.epetbar.com/static_wap/appmall/lib/goods/quality_assurance.png" alt="" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="margin-div"></div>
                            <div className="newcxmsg bgfff rela arrow bbtnone">
                                <div className="newcxmsgul ml10 clearfix">
                                    <div className="fl text ft13 c999 ftleft">促销</div>
                                    <ul className="fl">
                                        <li className="pr20 rela ft12 c333">
                                            <span className="new_icon_char ft12">折扣</span>
                                            <span className="new_title">玛氏超品日，1元起购 </span>
                                            {/* <span className="go">></span> */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="margin-div"></div>
                            <div>
                                <ul className="bgfff">
                                    <li className="ft13 rela c666 pt10 pl10 pb10 bbt arrow" >
                                        <span className="ellipsis pr10 w26" style={{ float: 'left' }}>
                                            <span className="ask-left-text" >
                                                新客优惠
                                            </span>
                                        </span>
                                        <span className="ellipsis pr20 ftr ft12 c999 w74" style={{ float: 'right', maxWidth: '60%' }}>新客专题，超值折扣</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="bgfff new_specifications">
                                    <li className="paddingtb10 ft13 rela c666 ml10 handcursor">
                                        <span className="ellipsis w100" style={{ float: 'left' }}>
                                            <span>已选:</span>
                                            <span className="bui-important format-detail">‘绿茶味’</span>
                                        </span>
                                    </li>
                                    <li className="pad10 ft13 rela c666 btop">
                                        <span className="dib w15 format-title c999 ft12">
                                            配方
                                        </span>
                                        <div className="dib w85 c333 ft14">
                                            <span className="dib format-item mr5 mb5 handcursor round5 b-all">
                                                <span>原味</span>
                                            </span>
                                            <span className="dib format-item mr5 mb5 handcursor round5 b-all selected">
                                                <span>
                                                    绿茶味
                                                  </span>
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="margin-div"></div>
                            <div>
                                <div className="buynum bgfff pad10">
                                    <span className="dib w20 c333 ft13">
                                        购买数量
                                   </span>
                                    <div className="dib w80">
                                        {/*  */}
                                        <span onClick={this.reduce} className="dib newbbt newbtop newbleft dec-btn format-title ftc handcursor c999 disableColor">-</span>
                                        <input onChange={this.change} type="number" className="num-input ftc f03e3e" value={this.state.val} />
                                        <span onClick={this.add} className="dib ftc newbbt newbtop newbright add-btn format-title handcursor c999">
                                            +
                                       </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                <div className="shopping clearfix">
                    <div className="fl rela w50 function clearfix">
                        <a className="ftc w50 function-item handcursor fl db">
                            <i className="icon iconfont lh20 collection nocoll">
                                <span></span>
                            </i>
                            <p className="evaluate-count ft12 lh20 c999">收藏</p>
                        </a>
                        <a className="ftc w50 function-item fl db" onClick={() => { this.props.history.push('/cart') }}>
                            <i className="icon iconfont lh20 addcar">
                                <span className="carttotalnum">{this.state.qty}</span>
                            </i>
                            <p className="evaluate-count ft12 lh20 c999"  >购物车</p>
                        </a>
                    </div>
                    <div className="fl w50 to-buy ftc handcursor flex ft15 red" onClick={this.add2cart}>
                        <p >加入购物车</p>
                    </div>
                </div>
            </>
        )
    }


}
export default Details
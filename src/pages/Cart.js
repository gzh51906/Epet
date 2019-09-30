import React, { Component } from "react"
import { Icon, Button, Toast, Checkbox, Modal } from "antd-mobile"
import axios from '../../node_modules/axios';
import url from '../axios'
import '../style/cart.css'
const alert = Modal.alert;
const CheckboxItem = Checkbox;
class Cart extends Component {
    state = {
        data: [],
        val: 1,
    }
    showToast() {
        Toast.info('结算成功,由于是测试所以不清空购物车', 1);
    }
    //input的加减改变
    add = async (num, gid, index, e) => {
        num = e.target.value = this.state.data[index].num = num + 1
        this.setState(({
            // val: this.state.val + 1,
            totalPrice: this.state.data.reduce((prev, item) => prev + item.num * 1 * item.price, null)
        }))
        axios.patch(url + '/Egoods/cart', { num, gid })

    }
    reduce = async (num, gid, index, e) => {
        if (num * 1 > 1) {
            num = num * 1 - 1;
        }
        e.target.value = this.state.data[index].num = num
        this.setState({
            // val: this.state.val + 1,
            totalPrice: this.state.data.reduce((prev, item) => prev + item.num * 1 * item.price, null)
        })
        axios.patch(url + '/Egoods/cart', { num, gid })

    }
    change = (gid, index, e) => {
        if (!e.target.value || e.target.value < 1) {
            e.target.value = 1
        }
        let num = this.state.data[index].num = e.target.value * 1
        this.setState({
            // val: this.state.val + 1,
            totalPrice: this.state.data.reduce((prev, item) => prev + item.num * 1 * item.price, null)
        })
        axios.patch(url + '/Egoods/cart', { num, gid })


    }
    del = async (gid, index) => { //删除
        this.state.data.splice(index, 1) //删除调对应的数据
        Toast.info('删除成功', 1);
        this.setState({
            totalPrice: this.state.data.reduce((prev, item) => prev + item.num * 1 * item.price, null)
        })
        axios.post(url + '/Egoods/cart', { gid })

    }
    clear = () => {
        this.setState({
            // val: this.state.val + 1,
            data: [],
            totalPrice: null
        })
        axios.post(url + '/Egoods/cart').then(res => {
            console.log(res)
        })
    }

    async componentDidMount() {
        let { data: { data } } = await axios.get(url + '/Egoods/cart')
        this.setState({
            data,
            totalPrice: data.reduce((prev, item) => prev + item.num * 1 * item.price, null)//商品总价。prev之前的总数，从null开始算，就是没有级不显示

        })


    }
    render() {
        return (
            <>
                <div className="cart">
                    {/* head */}
                    <div className="head">
                        <Icon type='left' className="fl mt" onClick={() => { this.props.history.go(-1) }} />  {/*返回 */}
                        <span>购物车</span>
                        <Icon className="fr icon" onClick={() => { this.props.history.push('/home') }} />{/*返回home*/}
                    </div>
                    {/* content */}
                    <div style={{ padding: '50px 0' }}>
                        {
                            this.state.data.map((val, index) => (
                                < div key={val.price} style={{ padding: '0 15px' }} id={index}>
                                    <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                                        <CheckboxItem size="small" style={{ marginRight: 5, marginTop: 30 }} />
                                        <img style={{ height: 85, width: 85, marginRight: 15, border: '1px solid #e1e1e1' }} src={val.src} alt="" />
                                        <div style={{ lineHeight: 1, flex: 1 }}>
                                            <div style={{ marginBottom: 8 }}>{val.title}</div>
                                            <div style={{ color: '#FF6E27' }}>¥{val.price} </div>
                                            <div onClick={this.del.bind(null, val.gid, index)} className="fr" style={{ color: '#FF6E27', fontSize: 12, marginRight: 13 }}>删除</div>
                                            <div>
                                                <button onClick={this.reduce.bind(null, val.num, val.gid, index)} style={{ width: 15, marginTop: 16 }}>-</button>
                                                <input onChange={this.change.bind(null, val.gid, index)} type="number" value={val.num} style={{ width: 50, textAlign: 'center' }} />
                                                <button onClick={this.add.bind(null, val.num, val.gid, index)} style={{ width: 15, marginTop: 16 }}>+</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            ))
                        }
                        <span onClick={() =>
                            alert('删除', '您确定清空吗', [
                                { text: '取消', onPress: () => console.log('cancel') },
                                { text: '确定', onPress: () => { return this.clear() } },
                            ])
                        } style={{ fontSize: 12, color: '#cccccc', textAlign: 'left', padding: 10, paddingBottom: 60 }}>清空购物车</span>


                    </div>
                    {/* footer */}

                    <div className="footer">

                        <span className="verticalAlign fl margin1">
                            <CheckboxItem size="small" style={{ margin: '0px 5px' }} onChange={() => { }} />总额：{this.state.totalPrice}
                        </span>
                        <Button className="verticalAlign fr margin2" type="warning" inline size="small" onClick={this.showToast}>结算</Button>
                    </div>
                </div>

            </>
        )
    }

}

export default Cart;


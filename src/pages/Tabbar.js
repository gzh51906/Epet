import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home'
import List from './List'
import Mine from './Mine'
import Notfound from './Notfound'
import { TabBar } from 'antd-mobile';
import img from '../images/nav.png'
class Tabber extends Component {


    state = {
        selectedTab: 'blueTab',
        hidden: false,
        fullScreen: false,
    }

    renderContent(pageText) {
        return (
            <div></div>
        );
    }

    render() {
        return (
            <div>

                < div style={{ position: 'fixed', width: '100%', bottom: '0' }}>
                    <TabBar
                        unselectedTintColor="#949494"   //未选中字体颜色
                        tintColor="#33A3F4"             //已选中字体颜色
                        barTintColor="white"            //背景颜色
                        hidden={this.state.hidden}
                        style={{ display: "flex" }}
                    >
                        <TabBar.Item
                            // title="首页"
                            key="Home"

                            icon={<div style={{   //没选中的状态
                                width: '45px',
                                height: '48px',
                                background: `url(${img}) 0px 1px /  390px 110px no-repeat`   // 左右，上下/图片的宽 高

                            }}
                            />
                            }
                            selectedIcon={<div style={{   //选中的状态
                                width: '45px',
                                height: '48px',
                                background: `url(${img}) 0px -57px /  390px 110px no-repeat`
                            }}
                            />
                            }
                            // badge={1}
                            // selected={this.state.selectedTab === 'blueTab'}
                            selected={this.state.selectedTab === '/tabbar/home'}

                            onPress={() => {
                                this.setState({
                                    // selectedTab: 'blueTab',
                                    selectedTab: '/tabbar/home'
                                });
                                this.props.history.push("/home")
                            }}
                            data-seed="logId"
                        >
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '45px',
                                    height: '48px',
                                    background: `url(${img}) -55px 1px /  390px 110px no-repeat`
                                }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '45px',
                                    height: '48px',
                                    background: `url(${img}) -58px -57px /  390px 110px  no-repeat`
                                }}
                                />
                            }

                            key="List"
                            // badge={'new'}
                            // selected={this.state.selectedTab === 'redTab'}
                            selected={this.state.selectedTab === '/tabbar/list'}

                            onPress={() => {
                                this.setState({
                                    // selectedTab: 'redTab',
                                    selectedTab: '/tabbar/list'

                                });
                                this.props.history.push("/list")
                            }}
                            data-seed="logId1"
                        >
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '45px',
                                    height: '48px',
                                    background: `url(${img}) -115px 1px /  390px 110px no-repeat`
                                }}
                                />}
                            selectedIcon={
                                <div style={{
                                    width: '45px',
                                    height: '48px',
                                    background: `url(${img}) -115px -57px /  390px 110px no-repeat`
                                }}
                                />}
                            // title="购物车"
                            key="Cart"
                            // dot
                            // selected={this.state.selectedTab === 'greenTab'}
                            selected={this.state.selectedTab === ' /tabbar/cart'}

                            onPress={() => {
                                this.setState({
                                    // selectedTab: 'greenTab',
                                    selectedTab: '/tabbar/cart'
                                });
                                this.props.history.push("/cart")
                            }}
                        >
                        </TabBar.Item>
                        <TabBar.Item

                            icon={
                                <div style={{
                                    width: '45px',
                                    height: '48px',
                                    background: `url(${img}) -262px 1px /   390px 110px no-repeat`
                                }}
                                />
                            }

                            selectedIcon={

                                <div style={{
                                    width: '45px',
                                    height: '48px',
                                    background: `url(${img}) -262px -57px /   390px 110px no-repeat`
                                }}
                                />
                            }
                            // title="我的"
                            key="mine"
                            // selected={this.state.selectedTab === 'yellowTab'}
                            selected={this.state.selectedTab === '/tabbar/mine'}

                            onPress={() => {
                                this.setState({
                                    // selectedTab: 'yellowTab',
                                    selectedTab: '/tabbar/mine'

                                });
                                this.props.history.push("/mine")
                            }}
                        >
                        </TabBar.Item>

                    </TabBar>
                </div>

                < Switch >
                    <Route path='/tabbar/home' component={Home} />
                    <Route path='/tabbar/list' component={List} />
                    <Route path='/tabbar/mine' component={Mine} />

                    <Route path="/notfound" component={Notfound} />

                    <Redirect from="/" to="/tabbar/home" exact />
                    <Redirect from="/tabbar/cart" to="/cart" exact />
                    {/* 404 一定要写在最后面*/}
                    < Redirect from="*" to="/notfound" />
                </Switch>
            </div >
        );
    }
    componentDidMount() {
        this.setState({
            selectedTab: this.props.location.pathname  //记录当前选中
        });
    }
    componentWillReceiveProps() {
        this.setState({
            selectedTab: this.props.history.location.pathname  //改变url也可以改变
        });
    }

}




export default Tabber;

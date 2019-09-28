import React, { Component } from "react"
import { Flex, Carousel } from 'antd-mobile';

import '../style/home.css'

class Home extends Component {
    state = {
        data0: [1, 2], //第一个轮播图
        data1: [],    //5个图标
        data2: [],    //banner
        data3: [],    //新人保障必买,左边
        data4: [],    //新人保障必买,右边
        data5: [],    // 每日特卖，e宠拼团
        data6: [],    //品牌特卖
        data7: [],    //e宠国际,obj一个对象里放一张轮播图片
        data8: [],    //国产狗粮
        data9: [],    //猜你喜欢

    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data0: [
                    "https://img2.epetbar.com/nowater/2019-09/24/19/067130e2b03e8c62feb7a382e81c98b0.jpg",
                    "https://img2.epetbar.com/2019-09/20/14/700701584fcfe18d432555ad7f0297e1.jpg",
                    "https://img2.epetbar.com/2019-09/23/15/9570a24eb9d1c888a76dcfbbe641ace8.png",
                    "https://img2.epetbar.com/2019-09/17/09/04d0e73e6ba53a07a9480edfec6a7906.jpg",
                    "https://img2.epetbar.com/nowater/2019-09/23/10/e90b742314ef46addf5f1a5643e93c87.jpg",
                    "https://img2.epetbar.com/2019-09/19/14/adf800c2ead62998958e3ae37166d074.jpg",
                    "https://img2.epetbar.com/2019-09/20/10/56d6994dd2733ce6f1d652efd7ec0497.jpg"

                ],
                data1: [
                    "https://img2.epetbar.com/2019-09/26/10/bbc887038e5f0cf163794c65526a59ed.png",
                    "https://img2.epetbar.com/2019-09/26/10/79358055355cb4b434ffe518b0a61b32.png",
                    "https://img2.epetbar.com/2019-09/26/10/8354c087dee5d0e4590996a1c2f9856f.png",
                    "https://img2.epetbar.com/2019-09/26/10/b58739323677e6deead4edf01e8eb9dc.png",
                    "https://img2.epetbar.com/2019-09/26/10/3483a06a4a693944af25a332a6bbcb2e.png"
                ],
                data2: ["https://img2.epetbar.com/2019-09/25/20/296db88e0e19a20cf83a4678da084d72.gif"],
                data3: ["https://img2.epetbar.com/2019-09/25/17/7043da5f4243bc2ac3ff6fafc301c8ad.gif"],
                data4: [
                    "https://img2.epetbar.com/2019-09/25/18/fe6b944048ca73e82e5e386aee3a9304.jpg",
                    "https://img2.epetbar.com/2019-09/25/17/2d9b72859598b0c15a3e3f46aa3c44ec.jpg",
                    "https://img2.epetbar.com/2019-09/25/18/7b5247b5d690cf574dec14c3c73ddddf.jpg"
                ],
                data5: [
                    {
                        width: 60,
                        class: "daily_1",
                        src: "https://static.epetbar.com/static_wap/appmall/main/index_icon_berserk_mark_415.png?version=03",
                        obj: [{ src: "https://img1.epetbar.com/2018-09/12/13/ce6ead5602d46c4bf15bf0a4e7e6949b.jpg", price: '13.80', oldPrice: '138.00' }, { src: "https://img1.epetbar.com/2018-09/13/14/2c9702cd647aade04ac3aad6b1e228ac.jpg", price: '11.60', oldPrice: '116.00' }]
                    },
                    {
                        width: 80,
                        class: "daily_2",
                        src: "https://static.epetbar.com/static_wap/appmall/main/index_icon_egroup_415.png?version=03",
                        obj: [{ src: "https://img1.epetbar.com/2018-06/07/15/ce2003c0872b3a3f4248a7bf22704b18.jpg", price: '49.70', oldPrice: '709.00' }, { src: 'https://img1.epetbar.com/goods/sales/20190527182623_478983.jpg', price: '5.60', oldPrice: '10.50' }]
                    }
                ],
                data6: [
                    { src: "http://img2.epetbar.com/nowater/showcase/2019/09/26/090622614.jpg", src2: "http://img2.epetbar.com/nowater/showcase/2019/09/26/090621375.jpg", src3: "http://img2.epetbar.com/nowater/showcase/2019/09/26/090713634.jpg" },
                ],
                data7: [
                    { src: "https://img2.epetbar.com/nowater/2018-10/18/18/c529a10ea2355ecf3c72258de10701ae.png", obj: [{ src: "https://img2.epetbar.com/2019-08/22/11/1a7c100a1b90c049bea27775ad023a07.jpg" },] },
                ],
                data8: [
                    {
                        src1: "https://img2.epetbar.com/nowater/2019-04/02/18/b00459bea7b4e869cb9ac96a3ea680d8.png", src2: "https://img2.epetbar.com/2019-04/26/13/e6267b7270a20632d4e700bd9a6c31d2.png",
                        obj: [
                            { src: "https://img1.epetbar.com/2018-12/27/14/2b053cad88783e3faf750901d9b7b1a4.jpg", price: 149.00, oldPrice: 178.00 },
                            { src: "https://img1.epetbar.com/2019-01/17/11/b45cc775fdf47d186f36e650f1ca2948.jpg", price: 220.00, oldPrice: 440.00 },
                            { src: "https://img1.epetbar.com/2018-10/22/18/c401846f1dd8d0233568d84b8c9e4c8b.jpg", price: 108.00, oldPrice: 126.00 },
                            { src: "https://img1.epetbar.com/2018-11/05/13/9a5aec518de5c757981809c9f342de81.jpg", price: 129.00, oldPrice: 159.00 },
                            { src: "https://img1.epetbar.com/2017-07/04/14/a0ecf1f35cf851489d7123226dca8ab7.jpg", price: 75.00, oldPrice: 102.00 },
                            { src: "https://img1.epetbar.com/2018-04/08/11/84fbfdc4337ccdb6e6dba95fbaaba7d7.jpg", price: 55.00, oldPrice: 72.00 },
                            { src: "https://static.epetbar.com/static_wap/appmall/lib/list/more_all.jpg", price: '', oldPrice: '' },
                        ]
                    },],
                data9: [
                    [{ src: "https://img2.epetbar.com/goods/sales/20190911150738_95561.jpg", title: "红狗RedDog 犬用营养膏 120g ", price: 85.00, id: 146751 },
                    { src: " https://img2.epetbar.com/goods/sales/20190428144239_433370.jpg", title: "英国MAG 优质配方羊奶粉 适用成幼犬400g ", price: 95.00, id: 145832 }],

                    [{ src: "https://img2.epetbar.com/goods/sales/20190812171301_288604.jpg", title: "BOTH 山羊奶粉 450g", price: 118.00, id: 106570 },
                    { src: "https://img2.epetbar.com/goods/sales/201904281501053_637227.jpg", title: "美国麦德氏 IN-Basic四合一配方羊奶粉 300g", price: 80.00, id: 174146 }],

                    [{ src: "https://img2.epetbar.com/goods/sales/20190716135552_446268.jpg", title: "维斯康VitsCan 犬用 速补综合营养膏 120.5g", price: 65.00, id: 112908 },
                    { src: "https://img2.epetbar.com/goods/sales/upload_file_20193212937.jpg", title: "谷登GOLDEN 犬用金装优加营养膏 120g ", price: 68.00, id: 151444 }],

                    [{ src: "https://img2.epetbar.com/goods/sales/2019052201001047_570130.jpg", title: "维斯康VitsCan V+系列犬用高能多糖免疫速补营养膏 120.5g", price: 88.00, id: 173455 },
                    { src: "https://img2.epetbar.com/2016-07/19/12/48ac32fd263638f044e30222eaa3a274.jpg", title: "美国麦德氏 IN-Vet犬用医护营养膏 55g ", price: 52.00, id: 170125 }],

                    [{ src: "https://img2.epetbar.com/goods/sales/20190428145911_3655.jpg", title: "谷登GOLDEN 全犬羊奶粉 200g ", price: 68.00, id: 157478 },
                    { src: "https://img2.epetbar.com/2014-11/18/6a696685a847c1e3e617fb44c2f96eb9.jpg", title: "新宠之康 犬用内销型羊奶粉 260g ", price: 25.00, id: 119340 }],


                ],
            });
        }, 100);
    }




    render() {
        onscroll = () => {//监听滚动
            let head = document.getElementById('home_head')
            if (head) {
                var scrollTop = document.documentElement.scrollTop;
                /*1.默认的透明度*/
                // var opacity = 0;
                let height = 10;
                if (scrollTop < height) {
                    /*2.当页面滚动的时候---随着页面卷曲的高度变大透明度变大*/
                    // opacity = scrollTop / height * 0.85;
                    if (this.props.location.pathname === "/tabbar/home") {
                        head.classList.remove("chagneColor");
                    }

                } else {
                    /*3.当页面滚动的时候---超过某一个高度的时候透明度不变*/
                    // head.classList.remove("chagneColor");
                    if (this.props.location.pathname === "/tabbar/home") {
                        head.classList.add("chagneColor");
                    }

                }
            }
        }
        return (
            <>
                < div className="flex-container home " >
                    {/* head */}
                    <Flex >
                        <Flex.Item className="home_head" id="home_head">
                            <input type="text" className="input" placeholder="请输入搜索内容" />
                            <ul className="ul1 flex">
                                <li style={{ fontSize: 20, fontWeight: 'bold' }}>精选</li>
                                <li>进口狗粮</li>
                                <li>国产狗粮</li>
                                <li>内外驱虫</li>
                                <li>五官护理</li>
                            </ul>
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item>
                            {/* 轮播图 */}
                            <Carousel
                                autoplay={true}
                                infinite={true}
                                dotStyle={{ marginBottom: 40, background: 'none', border: '1px solid white', boxSizing: "border-box" }}
                                dotActiveStyle={{ marginBottom: 40, background: 'white' }}
                            // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            //afterChange={index => console.log('slide to', index)}
                            >
                                {
                                    this.state.data0.map(val => (
                                        <a
                                            key={val}
                                            href="#"
                                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                        >
                                            <img
                                                src={val}
                                                alt=""
                                                style={{ width: '100%', verticalAlign: 'top' }}
                                                onLoad={() => {
                                                    window.dispatchEvent(new Event('resize'));
                                                    this.setState({ imgHeight: 'auto' });
                                                }}
                                            />
                                        </a>
                                    ))
                                }
                            </Carousel>
                            {/* 5个图标 */}
                            <div className="nav2">
                                <ul className="flex">
                                    {  //遍历等到div
                                        this.state.data1.map(val => (
                                            <li key={val}>
                                                <img src={val} alt="" />
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            {/* 类似于banner */}
                            <div className="flex banner">
                                <img alt="" src={this.state.data2} />
                            </div>
                            {/* 新人保障必买 */}
                            <div className="currency_ad ">
                                <img src="https://img2.epetbar.com/2019-09/25/17/19e3f8ab2c96875e0da054c2886c1507.jpg" alt="" />

                                <div>
                                    <div style={{ width: '46.4%', float: 'left' }}>
                                        <img className="currency_ad" src={this.state.data3} alt="" />
                                    </div>
                                    <div style={{ width: '53.6%', float: 'left' }}>
                                        {
                                            this.state.data4.map(val => (
                                                <img src={val} alt="" key={val + '1'} />
                                            ))
                                        }

                                    </div>
                                </div>
                                <img src="https://img2.epetbar.com/2019-09/25/18/e1defd07c40972776b194174cfd367c4.gif?x-oss-process=style/water" alt="" />
                            </div>
                            {/* 公益广告 */}
                            <div className="gy">
                                <img src="https://img2.epetbar.com/2019-09/25/11/908e62d71e648b19b2017a0344323d96.gif" alt="" />
                            </div>
                            {/* 每日特卖，e宠拼团 */}
                            <div className="daily flex" >
                                {
                                    this.state.data5.map(val => (
                                        <div className={val.class} key={val.class}>
                                            <div>
                                                <img style={{ width: val.width, marginLeft: 10 }} src={val.src} alt="" />
                                            </div>
                                            <ul>
                                                {val.obj.map(ele => (
                                                    <li key={ele.price}>
                                                        <img src={ele.src} alt="" />
                                                        <div>￥{ele.price}</div>
                                                        <del>￥{ele.oldPrice}</del>
                                                    </li>
                                                ))}

                                            </ul>

                                        </div>
                                    ))
                                }
                            </div>
                            {/* 品牌特卖 */}
                            <div style={{ marginBottom: 19 }}>
                                <div style={{ margin: '0 10px 12px', display: 'flex', justifyContent: 'space-between' }}>
                                    <img style={{ height: 19, marginTop: 1.5 }} src="https://img2.epetbar.com/nowater/2019-07/12/14/1f63b158360efcf3d9b0f008ea7fa77b.png" alt="" />
                                    <img style={{ height: 22 }} src="https://img2.epetbar.com/nowater/2018-10/18/18/01c98c8320c7f1567ac409a7a847607d.png" alt="" />
                                </div>
                                <Carousel dots={false}>
                                    {
                                        this.state.data6.map(val => (
                                            <div key={val.src}>
                                                <div style={{ margin: "0 10px" }}>
                                                    <div>
                                                        <img style={{ width: '100%', borderRadius: 15 }} src={val.src} alt="" />
                                                    </div>
                                                    <div style={{ marginTop: 10, display: 'flex' }}>
                                                        <div style={{ marginRight: 10 }}>
                                                            <img style={{ width: '100%', borderRadius: 10 }} src={val.src2} alt="" />
                                                        </div>
                                                        <div >
                                                            <img style={{ width: '100%', borderRadius: 10 }} src={val.src3} alt="" />
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Carousel>

                            </div>
                            {/* e宠国际 */}
                            {
                                this.state.data7.map(val => (
                                    <div style={{ marginBottom: 19 }} key={val.src}>
                                        <div style={{ margin: '0 10px 19px', display: 'flex', justifyContent: 'space-between' }}>
                                            <img style={{ height: 19, marginTop: 1.5 }} src={val.src} alt="" />
                                            <img style={{ height: 22 }} src="https://img2.epetbar.com/nowater/2018-10/18/18/01c98c8320c7f1567ac409a7a847607d.png" alt="" />
                                        </div>


                                        <div style={{ margin: "0 10px" }}>
                                            <Carousel dots={false}>
                                                {val.obj.map(ele => (
                                                    <img key={ele.src} style={{ width: "100%", borderRadius: 15 }} src={ele.src} alt="" />
                                                ))}
                                            </Carousel>

                                        </div>
                                    </div>
                                ))
                            }
                            {/* 国产狗粮 */}
                            {
                                this.state.data8.map(val => (
                                    <div style={{ marginBottom: 19 }} key={val.src2}>
                                        <div style={{ margin: '0 10px 19px', display: 'flex', justifyContent: 'space-between' }}>
                                            <img style={{ height: 19, marginTop: 1.5 }} src={val.src1} alt="" />
                                            <img style={{ height: 22 }} src="https://img2.epetbar.com/nowater/2018-10/18/18/01c98c8320c7f1567ac409a7a847607d.png" alt="" />
                                        </div>
                                        <div style={{ margin: "0 10px", boxShadow: '0px 5px 12.5px 0px rgba(0,0,0,0.1)', borderRadius: 15 }}>
                                            <div style={{ position: "relative" }}>
                                                <img style={{ width: "100%", borderRadius: 15 }} src={val.src2} alt="" />
                                                <img style={{ width: "100%", position: "absolute", bottom: 0, left: 0 }}
                                                    src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsYAAAApCAYAAAA25e/LAAAAGXRFWHRTb2Z0d2
                                        FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBi
                                        ZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6
                                        bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo
                                        0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgt
                                        bnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLj
                                        AvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5h
                                        ZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDI
                                        wMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNDM0UzRjIwQzFGRTExRTg4QzY4QjIwNzcxQTQ3NzU1IiB
                                        4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNDM0UzRjIxQzFGRTExRTg4QzY4QjIwNzcxQTQ3NzU1Ij4gPHhtcE1NOkRlcml2ZWRG
                                        cm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0MzRTNGMUVDMUZFMTFFODhDNjhCMjA3NzFBNDc3NTUiIHN0UmVmOmRvY3VtZW5
                                        0SUQ9InhtcC5kaWQ6M0MzRTNGMUZDMUZFMTFFODhDNjhCMjA3NzFBNDc3NTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4
                                        gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4DlflcAAAFoUlEQVR42uzd+VMURxjG8UYEuS81XAbUGA3RkEQTzWEqqfz//0IS
                                        VI7lEthDVo6QfmufznZNhl0ILMzOfj9Vb3XPsctusz881dUz03VycuIAAACADtfbRTAGAABAB+r29dzX76rXBGMAAAB0ghu+nvn6TUH4V1
                                        9j8QkEYwAAAOSRzQh/rQBs9YuviUYvIBgDAAAgD3p8fe/rpygIj57nDQjGAAAAaEfDvn5WWQh+6av/Im9IMAYAAEA7mPb1WiHY2kVXWy5xaQj
                                        GAAAAyJqbrrY+2JZFvPL1o6+Hrf6jBGMAAABct7sKv1Y/uNpa4cGr/hAEYwAAAFwlW/5gt02ztcGvFIQfZ+GDWTBe8e2fqj+ivlWB/x0AAAAuYN
                                        7VZoAtBNsFcvZQjaEsflALxo2mjD9EIfkvlfWXVCX+1wAAAJBxhd+XCsPWTrbLh28WjJvZVEAOoXkpCs5vfVX5fQAAAORSn69voiBs9cjyZbt+oY
                                        sG42bWFJLfqOK+Bel9flMAAACZZw/PsHXBL1Q2G7yo/bnR6mDczLqrzSwvufosc9wv8jsEAAC4UnartKe+vouCsIXgvrx/8esOxs3sKSCHWeZ32g4B2i
                                        4OPOb3CwAA8L9Y2LWZ4OeqbzslBLdjMG7m0NdKFJ7fJsr2VfjNAwAAuBFXe2iGrQt+ofZLl7PlEJ0cjM/iva9lBWWbcV6N+stquUgQAADkyayCbyibCbYn
                                        x3UxNJ0djM9iQyHZ6o3Cc+hba7PSBwwTAADImF5fC76+SoTgCYaGYNwqNka2njmeZbZaU7uiMM3MMwAAaJVZBWBbDrGo/heOpRAE44zajMLyqgLzu8S+9
                                        wwTAABowB6SYWt/n6pCGGYWmGCcO3bv5mWF5DhALytA2/pnu43dEUMFAECujUbh14LwM7UzDA3BGHXHCscWlgtq1xWgC1Fr+/j/AQCQ/QC8EAXfEIZnGRq
                                        CMS7PUSIw2+zzWkprFxf+zXABANBSI1EADhfEWfspQ0MwRrYC9Ib774xz2gw0ARoAgMbu+XqiWoj6cwwNwRj5cawAbbWqtqCy/prCs9U2wwUAyLFbvh6fE
                                        oCHGR6CMRA7SAnOp4XpIsMFAMggu83ZfV+fKwRbPVJryx9uMEQEY+Cy2Z041l19vXNamA77ywwXAOCSw++cAu9nCsFPtP3A102GCARjZDlEbypIb6i/oe1
                                        NV79X9Jb6PJEQADCgoPswpZ0n/IJgjE6xo9C8pQqzz1tRFaL+R4YMANovr7javX0fKOyGNgTgKYYIBGPg/Eop4TnMSttTCbdTijt1AEDrTbvaet951f2o
                                        LAjfYohAMAau33aD0LytYJ08XmXYAOBffa52Mducaj7qhyL4gmAM5FQlCslbDUJ1fJy7dwBoR3Zx27SCrz3JbUbB914UelnqAIIxgHM5dLWZ552oktun7d
                                        tn+AC0wKAC7oza0J9TO6vQ28VQgWAMICuqicC862tP7W5ieydl3yFDCHSUO74mFW4t2E6rphR2P1EIHmSoQDAG0GkqKWHa+sVouxjtC21RQdsuajxiG
                                        IFr0+3rrmpSdUfb09GxGR1jPS9AMAbQQvsKyiUF5xCey1HwLqlf1vFSdDycX3EsDQFGFGytJnzdjmpCIXcqCrx2HssZAIIxgBw6dvUZ6RCcQ7+aCNCh
                                        X1W4/qD9oV9VKN933C0EV8uWIYwlajSxffuU4NvD8AEEYwBopROFZFv2UVJQ3lewPlCYPnb1ddflKFCXtW9X5+zpPXfUhuUk4fzwerSXXgXacbVWQyn
                                        bY2ptezglAFvxtDWAYAwASAnjpqhQbTPZHxXGKzoWwnmyH85t1E/OhqfNjsfv6RKfJ7arz3ze73ZW402O9yhwBrYWdiClb/fF7U/p92t7QOcP6T
                                        1tprZbgdXakSgEh9cPah8AgjEAAADQuf4RYADL/jihZ0fMHwAAAABJRU5ErkJggg==`}
                                                    alt="" />
                                            </div>
                                            <ul className="dogFood">
                                                <Carousel
                                                    slideWidth={0.33}
                                                    dots={false}
                                                    // dotActiveStyle={"2"}
                                                    selectedIndex={1}
                                                    afterChange={(index) => {
                                                        if (index === 0) {
                                                            index = 1
                                                        }
                                                    }}
                                                >
                                                    {val.obj.map(ele => (
                                                        <div key={ele + '1'}>
                                                            <img className="dogFood_img" src={ele.src} alt="" />
                                                            <div>{ele.price !== undefined ? '￥' : ''}{ele.price}</div>
                                                            <del>{ele.oldPrice !== undefined ? '￥' : ''}{ele.oldPrice}</del>
                                                        </div>
                                                    ))}
                                                </Carousel>
                                            </ul>
                                        </div>
                                    </div>
                                ))
                            }
                            {/* 猜你喜欢 */}
                            <div style={{ margin: "0 5px" }}>
                                <img style={{ height: 19, marginBottom: 19 }} src=" https://img2.epetbar.com/nowater/2018-10/18/20/3fbb022a3225b959f51312c47f378016.png" alt="" />
                                {
                                    this.state.data9.map((val, index) => (
                                        <div className='flex' style={{ marginBottom: 10 }} key={index} >
                                            {
                                                val.map(ele => (<div style={{ padding: '0 5px', width: '50%' }} key={ele.title}>
                                                    <div className={ele.src ? 'guessYouLike_goods' : ""} >
                                                        <img style={{ width: '100%' }} src={ele.src} alt="" />
                                                        <div className="guessYouLike_title">
                                                            {ele.title}
                                                        </div>
                                                        <div className="guessYouLike_price">
                                                            {ele.price !== undefined ? '￥' : ''}{ele.price}
                                                        </div>
                                                    </div>
                                                </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                            <div style={{ height: 50, width: 10 }}></div>  {/*在底部撑开tabber所占的空间的 */}
                        </Flex.Item>
                    </Flex>
                </div >
            </>
        )
    }


}
export default Home

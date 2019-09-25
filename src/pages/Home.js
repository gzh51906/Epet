import React, { Component } from "react"
import { Flex } from 'antd-mobile';
import '../style/home.css'
class Home extends Component {
    state = {

    }



    render() {
        return (
            <>

                <div className="flex-container">

                    <Flex>
                        <Flex.Item className="head">
                            <input type="text" className="input" placeholder="请输入搜索内容" />
                            <ul className="ul1">
                                <li style={{ fontSize: 20, fontWeight: 'bold' }}>精选</li>
                                <li>进口狗粮</li>
                                <li>国产狗粮</li>
                                <li>内外驱虫</li>
                                <li>无官护理</li>
                            </ul>
                        </Flex.Item>
                    </Flex>

                </div>




            </>
        )
    }
}




export default Home
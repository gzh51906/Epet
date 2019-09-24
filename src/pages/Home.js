import React, { Component } from "react"
import { SearchBar, Icon } from 'antd-mobile'
import { nonsense } from "antd-mobile/lib/picker";
class Home extends Component {
    state = {

    }
    render() {
        return (
            <div>
                <input type="text" style={{ width: '70%', margin: 'auto', borderRadius: 10, fontSize: 12, height: 20 }} />


            </div>
        )
    }
}


export default Home
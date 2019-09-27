import React, { Component } from 'react'
import { Flex, Icon } from 'antd-mobile'

import { connect } from 'react-redux'
import benner from './benner.jpg'
import body from './body.jpg'
import msg from './msg.png'
import set from './set.png'
import Box from './component/box'
import * as action from './store/createaction'
const {Item}=Flex
 class Mine extends Component {

    vip=()=>{
        const {list}=this.props
        if(list.length>0){
            return (
                <Flex style={{height:"40px",backgroundColor:"#252525",borderRadius:"10px 10px 0 0",width:"100%"}}>
                    {list[0].data.items.map(v=>{
                        return (
                            <Item  style={{margin:"0 10px"}} key={v.below_text}>
                        <img src={v.above_image.img_url} alt={v.below_text} style={{width:"100%"}}/>
                    </Item>
                        )
                    }
                        )
                    }
                </Flex>
            )
        }
        
    }
    order=()=>{
        const {list}=this.props
        if(list.length>0){
            return (
                <div style={{display:"flex"}}>
                    {list[1].data.items.map(v=>{
                        const {above_image}=v;
                        const wid=above_image.img_size.split("x")[0]
                        const hei=above_image.img_size.split("x")[1]
                        return <div style={{display:"flex",flex:"1",height:"80px",justifyContent:"center",flexDirection:"column",alignItems:"center"}} key={v.below_text}>
                        <img src={above_image.img_url} style={{width:wid+"px",height:hei+"px"}} alt=""/>
                        <span>{v.below_text}</span>
                    </div>
                    }
                        )
                    }
                </div>
            )
        }
        
    }
    wallet=()=>{
        const {list}=this.props
        if(list.length>0){
            return (
                <div style={{display:"flex"}}>
                    {list[2].data.items.map(v=>{
                        return <div style={{display:"flex",flex:"1",height:"80px",justifyContent:"center",flexDirection:"column",alignItems:"center"}} key={v.below_text}>
                        <span style={{color:"#ff7d57",fontSize:'18px',lineHeight:"30px"}}>{v.above_text}</span>
                        <span style={{fontSize:'18px'}}>{v.below_text}</span>
                    </div>
                    }
                        )
                    }
                </div>
            )
        }
        
    }
    server=()=>{
        const {list}=this.props
        if(list.length>0){
            return (
                <div style={{display:"flex",flexWrap:"wrap"}}>
                    {list[3].data.items.map(v=>{
                        const {above_image}=v;
                        const wid=above_image.img_size.split("x")[0]
                        const hei=above_image.img_size.split("x")[1]
                        return <div style={{display:"flex",width:"25%",height:"80px",justifyContent:"center",flexDirection:"column",alignItems:"center"}} key={v.below_text}>
                        <img src={above_image.img_url} style={{width:wid+"px",height:hei+"px"}} alt=""/>
                        <span>{v.below_text}</span>
                    </div>
                    }
                        )
                    }
                </div>
            )
        }
        
    }

    render() {
        const {history,token,user}=this.props
        return (
            <div>
                <Flex style={{height:"50px"}}>
                    <Item style={{textAlign:"right"}}>
                    <Icon type="left" style={{lineHeight:"50px"}} onClick={()=>{
                        history.goBack()
                    }}/>
                    </Item>
                    <Item style={{flex:10,textAlign:"center",lineHeight:"50px"}}> <span>我的E宠</span></Item>
                    <Item ><Icon type="ellipsis" style={{lineHeight:"50px"}}/></Item>
                </Flex>
                
                <Flex 
                    style={{
                        height:"200px",
                        backgroundImage:`url(${benner})`,
                        backgroundSize:"cover",
                        padding:"10px 10px 0px 10px"
                            }}
                            direction="column"
                            >
                    <Flex style={{height:"50px",width:"100%"}}>
                        <Item style={{textAlign:"right",color:"#fff"}}>
                            <img src={set} style={{width:"100%",lineHeight:"50px"}} alt=""/>
                        </Item>
                        <Item style={{textAlign:"center",lineHeight:"50px",flex:10}}></Item>
                        <Item style={{color:"#fff",fontSize:"20px"}}>
                            <img src={msg} style={{width:"100%",lineHeight:"50px"}} alt=""/>
                        </Item>
                    </Flex>
                    <Flex style={{flex:1,alignSelf:"flex-start"}}>
                    <img 
                        style={{height:"70px",width:"70px",borderRadius:"50%",marginBottom:0}}
                        src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2632329412,813798018&fm=26&gp=0.jpg"  alt=""
                        onClick={()=>void history.push("/img")}
                        />
                        {
                            token?
                            <span>你好呀！{user}</span>:
                            <>
                            <span 
                            style={{padding:"0 10px",color:"#ffffff",fontSize:"18px"}}
                            onClick={()=>void history.push("/login")}
                            >登录</span>
                            <span style={{color:"#ffffff"}}>|</span>
                            <span 
                            style={{padding:"0 10px",color:"#ffffff",fontSize:"18px"}}
                            onClick={()=>void history.push("/reg")}
                            >注册</span>
                            </>
                        }
                    </Flex>
                    {this.vip()}
                </Flex>
                <div style={{backgroundImage:`url(${body})`,height:"1000px",backgroundSize:"cover",overflow:"hidden"}}>
                    <div style={{height:'20px'}}></div>
                    <Box tlt="我的订单" style={{padding:"10px",backgroundColor:`rgba(250,250,250,.7)`,margin:`10px`,borderRadius:`20px`,boxShadow: `1px 2px 25px 0px rgba(0,0,0,0.1)`}}>
                        {this.order()}
                    </Box>
                    <div style={{height:'20px'}}></div>
                    <Box tlt="我的钱包" style={{padding:"10px",backgroundColor:`rgba(250,250,250,.7)`,margin:`10px`,borderRadius:`20px`,boxShadow: `1px 2px 25px 0px rgba(0,0,0,0.1)`}}>
                        {this.wallet()}
                    </Box>
                    <div style={{height:'20px'}}></div>
                    <Box tlt="我的钱包" style={{padding:"10px",backgroundColor:`rgba(250,250,250,.7)`,margin:`10px`,borderRadius:`20px`,boxShadow: `1px 2px 25px 0px rgba(0,0,0,0.1)`}}>
                        {this.server()}
                    </Box>
                </div>
            </div>
        )
    }

    componentDidMount(){
        this.props.getdd()
    }
}


const mapState=v=>({
    list:v.mine.list,
    token:v.common.token,
    user:v.common.username
})
const mapDispatch=v=>({
    getdd(){
        v(action.getdd())
    }
})
export default connect(mapState,mapDispatch)(Mine)

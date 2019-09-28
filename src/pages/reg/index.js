import React, { Component } from "react";
import { Flex,Toast } from 'antd-mobile'
import { connect } from 'react-redux'
import * as action from '../../redux/common/createaction'
import { Redirect } from "react-router-dom";
import bg from './bg.jpg'
 class Reg extends Component {
    render() {
        const {random,submit,findph}=this.props
        console.log(this);
        
        return (
          <>
          {this.props.token
            ?
            <Redirect to="home"/>
            : 
          <div style={{backgroundImage:`url(${bg})`,height:"100vh",backgroundSize:" cover",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div style={{height:"300px",backgroundColor:`rgba(0,0,0,.5)`,padding:"20px",borderRadius:"20px",width:"80%"}}>
                  <h3 style={{textAlign:"center",color:"orange"}}>手机号码注册</h3>
                  <Flex style={{marginBottom:"20px"}}>
                    <img 
                      style={{height:"70px",width:"70px",borderRadius:"50%",marginBottom:0,marginRight:"10px",alignSelf:"flex-start"}}
                      src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2632329412,813798018&fm=26&gp=0.jpg" alt=""/>
                    <Flex style={{flex:1}} 
                      direction="column"
                    >
                      <input
                        style={{
                          height:"40px",
                          width:"100%",
                          border:"none",
                          backgroundColor:`rgba(255,255,255,.5)`,
                          borderRadius:'10px',
                          textIndent:"2em",
                          marginBottom:'20px'
                        }}
                        ref={v=>void (this.phone=v)}
                        onChange={()=>{
                          const {phone}=this
                            if(phone.value.length===11){
                              if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone.value))){
                                Toast.fail('手机号码格式有误', 1)
                              }else{
                                let temp=this
                                findph(phone.value,temp)
                                
                              }
                            }
                        }}
                      type="phone" name="" id="" />

                      <Flex style={{width:"100%"}}>
                        <input
                          style={{
                            flex:1,height:"40px",
                            border:"none",
                            backgroundColor:`rgba(255,255,255,.5)`,
                            borderRadius:'10px',
                            textIndent:"2em"
                          }}
                          ref={v=>void (this.random=v)}
                        type="phone" name="" id="" />
                        <span 
                        onClick={random}
                        style={{width:"70px",height:"40px",lineHeight:"40px",backgroundColor:`#B03060aa`,borderRadius:'10px'}}>获取验证码</span>
                      </Flex>
                    </Flex>
                  </Flex>
                  <div style={{textAlign:"center"}}>
                    <button 
                    onClick={submit.bind(this)}
                    style={{width:"70px",height:"40px",lineHeight:"40px",backgroundColor:`#B03060aa`,borderRadius:'10px',border:"none",alignSelf:"center"}}>注册</button></div>
                </div>
            </div>}
          </>
        );
    }
}
const mapState=(state)=>{
  return  {
    username:state.common.username,
    password:state.common.password,
    token:state.common.token,
    phone:state.common.phone,
    randomz:state.common.random
  }
}
const mapDispatch=(dispatch)=>{
    return{
        random(){
          dispatch(action.randomz())
        },
        async findph(v,_this){
           dispatch(action.findphone(v)).then(r=>{
          Toast.success('该号码可以注册', 1)
        }).catch(r=>{
          Toast.fail('手机已注册')
          _this.phone.value=""
        })
        },
        submit(){
          const {random,phone}=this
          if(random.value*1===this.props.randomz){
            dispatch(action.reg({phone:phone.value}))
          }else{
            Toast.fail('验证码有误', 1)
          }
        }
    }
}
export default connect(mapState,mapDispatch)(Reg)

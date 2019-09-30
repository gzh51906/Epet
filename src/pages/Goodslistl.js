import React, { Component } from 'react';
import '../style/goodslist.css';
import axios from '../../node_modules/axios';
// import '../style/base.css'
class Goodslist extends Component {

   state = {
      goodslist: []
   }
   async componentDidMount() {
      let { data: { data: data } } = await axios.get('http://localhost:1906/Egoods')
      console.log(data)
      let goods = data[0].list;
      console.log(goods)
      this.setState({
         goodslist: goods
      })
   }

   go = (gid) => {
      this.props.history.push(`/details/${gid}`)
   }
   back = () => {
      this.props.history.go(-1)
   }

   render() {
      console.log(this.props)
      return (
         <div className="Goodslistl">
            <div className="wap-top-bar hide">
               <header className="ftc head-top bgfff zcolor rela">
                  <div>
                     <a href="javascript:void(0)" className="aback page-top go-back left-more" onClick={this.back}></a>
                     <span className="ft18 topbar-title">商品列表</span>
                  </div>
               </header>
               <div className="proListbox">
                  <div className="pad10 bgfff search-wrap">
                     <div className="search clearfix round5 pl10 pr10 rela">
                        <i className="brands-ico db fl"></i>
                        <div className="search-text c666 ft14">
                           <input type="search" placeholder="点击搜索商品"></input>
                        </div>
                     </div>
                     <div className="rela btop navarea">
                        <ul className="clearfix bgfff screening bbt overflow w100">
                           <li className="fl ftc w25 current">
                              <a href="javascript:;" className="db rela ft14">
                                 <span>默认</span>
                              </a>
                           </li>
                           <li className="fl ftc w25 select3">
                              <a href="javascript:;" className="db rela ft14">
                                 <span>销量</span>
                              </a>
                           </li>
                           <li className="fl ftc w25 select3">
                              <a href="javascript:;" className="db rela ft14">
                                 <span>价格</span>
                              </a>
                           </li>
                           <li className="fl ftc w25 select3">
                              <a href="javascript:;" className="db rela ft14">
                                 <span>筛选</span>
                              </a>
                           </li>
                        </ul>

                     </div>
                  </div>
                  <div className="bgfff clearfix">
                     <ul className="brands-list list_libox">
                        {this.state.goodslist.map((item, index) => {
                           return (

                              <li>
                                 <div className="clearfix">
                                    <a href="javascript:void(0);"
                                       onClick={this.go.bind(this, item.gid)}
                                    >
                                       <div className="fl index-listimg rela loadimg-fixed">
                                          <img className="image" src={item.photo} />
                                       </div>
                                    </a>
                                    <div className="index-listpro">
                                       <a href="">
                                          <h1 className="el2 ft12 clearfix">
                                             {item.subject}
                                          </h1>
                                       </a>
                                       <div className="cfff ft12 cu mt5">
                                          <span className="cuimg dib mr3">
                                             <a href="javascript:;">
                                                <img src="https://static.epetbar.com/static_wap/appmall/lib/list/cu.png?version=2019041202" />
                                             </a>
                                          </span>
                                       </div>
                                       <div>
                                          <span className="cred ft14">￥{item.sale_price}</span>
                                          <span className="c999 ft12 ml10">47.61元/斤</span>
                                       </div>
                                    </div>
                                    <div className="addcart thisimg">
                                       <img src="https://static.epetbar.com/static_wap/epetapp/pages/index/images/addcart.png" />
                                    </div>
                                 </div>
                              </li>
                           )
                        })
                        }
                     </ul>

                  </div>
               </div>


            </div>
         </div>
      )
   }
}
export default Goodslist
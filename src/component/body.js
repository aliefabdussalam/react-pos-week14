import react from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/body.css"
import Sidebar from "./sidebar"
import CurrencyFormat from 'react-currency-format'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

class Body extends react.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  state={
    openModal : false
}
onClickButton = e =>{
    e.preventDefault()
    this.setState({openModal : true})
}

onCloseModal = ()=>{
    this.setState({openModal : false})
}

  render(){
    const {data, removeAll} = this.props
    const cartData = data.length
    const itemsPrice = data.reduce((total, product) => total + product.qty * product.price, 0);
    const ppn = itemsPrice * 10 / 100
    const inv = Math.floor(Math.random() * 1000000) + 11
    const Total = ppn + itemsPrice
    console.log(data)
    return(
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className={this.props.home===true?"itemmenu col-lg-8":"itemmenu col-lg-12"}>
              <Sidebar/>
              {this.props.home===true?
              <div id="items" class="product">
                {this.props.product.map((e)=>{
                    return(
                      <div className="prd" id={e.id}>
                        <img src={e.picture} onClick={()=>this.props.action(e.id)} alt=""/>
                        <div className="itemname" >{e.product_name}</div>
                        <div className="itemprice">{e.price}</div>
                      </div>
                    )
                  })
                }
              </div>:
                <div className="row">
                  <div className="income col-lg-12">
                    {this.props.card.map((e)=>{
                      return(
                        <div id={e.id} className="card">
                          <img src={e.img} alt=""></img>
                          <div className="text">
                            <p className="namecard">{e.namecard}</p>
                            <p className="price">{e.price}</p>
                            <p className="year">{e.year}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="revenue col-lg-12">
                    <img className="chart" src="./photo/Chart.png" alt="">
                    </img>
                  </div>
                  <div className="recent col-lg-12">
                  </div>
                </div>}
            </div>
            {this.props.home===true?
            <div className="cart col-lg-4">
                 {
                    cartData <= 0 ?(
                        <div className='cartEmpty'>
                            <img src="./photo/food-and-restaurant.png" alt=""/>
                            <h1>Your cart is empty</h1>
                            <p>Please add some items from the menu</p>
                        </div>
                    ): (
                        <div>
                            {
                                data.map((e)=>{
                                    return(
                                        <div key={e.id} className='listCart'>
                                            <div className='cartImage'>
                                                <img src={e.picture} height='100%' width='auto' alt="" /> 
                                            </div>
                                            <div className='cartBody'>

                                                <div className='cartTitle'>
                                                    <p className='title'>{e.product_name}</p>
                                                </div>
                                                <div className='cartPriceQty'>
                                                    <div className='cartQty col-3 ms-3 mt-3'>
                                                        <button type="" onClick= {()=>this.props.qtyRemove(e.id)}>-</button>
                                                        <span>{e.qty}</span>
                                                        <button type='' onClick= {()=>this.props.qtyAdd(e.id)}>+</button>
                                                    </div>
                                                    <div className='cartPrice'>
                                                        <CurrencyFormat className='totalPrice' value={e.price * e.qty} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className='CheckOut' >
                                <div className='total'>
                                    <div className='totalAll'>
                                        <h1>Total</h1>
                                        <CurrencyFormat className='price' value={itemsPrice} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /><span>*</span>
                                    </div>
                                    <p>*Belum termasuk PPN</p> 
                                </div>
                                
                                <div className='button'>
                                    <button onClick={this.onClickButton} className='checkOut'  type="">CheckOut</button>
                                    <Modal  open={this.state.openModal} onClose={this.onCloseModal}>
                                        <br />
                                        <div className='invoiceTitle'>
                                            <h1 className='check'>CheckOut <span> Receipt no : #{inv} </span></h1>
                                            <h2 className='cashier'>Cashier : Maudy Ayunda</h2>
                                        </div>
                                        {
                                            data.map((e)=>{
                                                return(
                                                    <div key={e.id} className='invoice'>
                                                        <div className='product'>
                                                            <p>{e.nameproduct} <span>{e.qty}x</span></p>
                                                        </div>
                                                        <div className='Price'>
                                                            <CurrencyFormat className='priceproduct' value={e.price * e.qty} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        <div className='totalPpn'>
                                            <div className='ppnPayment'>
                                                <p className='ppn'>Ppn 10%</p>
                                                <p className='pay'>Payment : Cash</p>
                                            </div>
                                            <div className='totalPayment'>
                                                <CurrencyFormat className='' value={ppn} displayType={'text'} thousandSeparator={true} prefix={'Rp '} />
                                                <p>Total : <CurrencyFormat className='' value={Total} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /></p>
                                            </div>
                                        </div>
                                        <div className='buttonPayment'>
                                            <button type="" className='print'>Print</button>
                                            <p>Or</p>
                                            <button type="" className='email'>Send Email</button>
                                        </div>
                                    </Modal> 
                                    <button className='Cancel' type="" onClick= {removeAll}>RemoveAll</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>:null}
          </div>
        </div>
        {this.props.home===true?
        <div className="container-fluid">
        </div>:null}
      </section>
    )
  }
}

export default Body
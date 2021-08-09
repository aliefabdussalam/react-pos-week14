import react from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/body.css"
import Sidebar from "./sidebar"

class Body extends react.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
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
                        <img src={e.picture} onclick="" alt=""/>
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
                <div className="cartid">
                  <div className="cartqty" id="cartitem">
                    <div className="empty" id="del">
                      <img className="cup" src="./photo/food-and-restaurant.png" alt="" srcset=""/>
                      <h3>Your cart is empty</h3>
                      <p>Please add some items from the menu</p>
                    </div>
                  </div>
                </div>
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
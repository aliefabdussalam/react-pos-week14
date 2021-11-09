import react from 'react'
import Navbar from '../component/navbar'
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/history.css"
import Body from "../component/body"
import Side from '../component/sidebar'

class History extends react.Component{
  constructor(props){
    super(props)
    this.state = {
      card: [
        {
          id: "one",
          img: "./photo/Group 1.png",
          namecard: "Today’s Income",
          price: "Rp. 1.000.000",
          year: "+2% Yesterday"
        },
        {
          id: "two",
          img: "./photo/Group 1 (1).png",
          namecard: "Orders",
          price: "3.270",
          year: "+5% Last Week"
        },
        {
          id: "three",
          img: "./photo/Group 1 (2).png",
          namecard: "This Year’s Income",
          price: "Rp. 100.000.000.000",
          year: "+10% Last Year"
        },
      ]
    }
  }
  render(){
    const card = [
      {
        id: "one",
        img: "./photo/Group 1.png",
        namecard: "Today’s Income",
        price: "Rp. 1.000.000",
        year: "+2% Yesterday"
      },
      {
        id: "two",
        img: "./photo/Group 1 (1).png",
        namecard: "Orders",
        price: "3.270",
        year: "+5% Last Week"
      },
      {
        id: "three",
        img: "./photo/Group 1 (2).png",
        namecard: "This Year’s Income",
        price: "Rp. 100.000.000.000",
        year: "+10% Last Year"
      },]
    return(
      <div>
        <Navbar col={false} cart={false} search={false}/>
        <div className="row">
        <Side />
        <div className="row col-11">
                  <div className="income col-lg-12">
                    {card.map((e)=>{
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
                </div>
        </div>
        
      </div>
    )
  }
}

export default History
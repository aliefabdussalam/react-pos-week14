import react from 'react'
import Navbar from '../component/navbar'
import "bootstrap/dist/css/bootstrap.min.css"
import Body from "../component/body"

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
    return(
      <div>
        <Navbar col={false} cart={false} search={false}/>
        <Body card={this.state.card}/>
      </div>
    )
  }
}

export default History
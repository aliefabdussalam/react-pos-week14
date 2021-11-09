import react from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/body.css"
import { Link } from 'react-router-dom'


class Side extends react.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return(
      <div className="sidebar" id="sb">
        <Link to="/"><img className="fork" src="./photo/fork.png" alt="" srcset=""/></Link>
        <Link to="/history"><img className="clip" src="./photo/clipboard.png" alt="" srcset=""/></Link>
        <img className="add" src="./photo/add.png" alt="" srcset=""/>
      </div>
    )
  }
}

export default Side
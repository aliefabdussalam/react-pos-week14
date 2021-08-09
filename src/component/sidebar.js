import react from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/body.css"


class Side extends react.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return(
      <div className="sidebar" id="sb">
        <a href="/"><img className="fork" src="./photo/fork.png" alt="" srcset=""/></a>
        <a href="/history"><img className="clip" src="./photo/clipboard.png" alt="" srcset=""/></a>
        <img className="add" src="./photo/add.png" alt="" srcset=""/>
      </div>
    )
  }
}

export default Side
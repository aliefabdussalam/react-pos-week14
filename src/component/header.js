import { div } from 'prelude-ls'
import React from 'react'

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: "heru",
            email: "heru@gmail.com"
        }
    }
    render(){
        return(
            <div>
                INI header{this.state.username}
            </div>
        )
    }
}

export default Header
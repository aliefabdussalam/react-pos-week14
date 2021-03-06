import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/home'
import History from '../pages/history'

class Router extends React.Component{
  render(){
    return(
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route
          path="/history"
          render={(props)=>(
            <History {...props}/>
          )}
        />
        <Route>
          404 NOT FOUND
        </Route>
      </Switch>
    )
  }
}

export default Router
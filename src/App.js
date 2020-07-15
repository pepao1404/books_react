import React from "react"
import { BrowserRouter as R, Route, Switch } from "react-router-dom"


import BookIndex from "./component/BookIndex"
import Making from "./component/NowMaking"
import Detail from "./component/Detail"
import Test from "./component/Test"

export default class Main extends React.Component {

  render() {
    return (
      <div className="container my-4">
        <R>
          <Route exact path="/" component={BookIndex} />
          <Switch>
            <Route path="/some" component={Making} />
            <Route path="/test" component={Test} />
            <Route path="/:title" component={Detail} />
          </Switch>
        </R>
      </div>
    )
  }
}
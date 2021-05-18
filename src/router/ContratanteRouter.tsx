import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavComponent from "../components/NavComponent";
import HomeContratantePage from "../pages/contratante/home-contratante-page/HomeContratantePage"

const ContratanteRouter = (): JSX.Element => {
  return (
    <Router>
      <div>
        <h2>Router Contratante</h2>
        <NavComponent />
        <Switch>
          <Route exact path="/contratante" component={ HomeContratantePage } />
        </Switch>
      </div>
    </Router>
  )
}

export default ContratanteRouter

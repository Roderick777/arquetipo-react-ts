import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavComponent from "../components/NavComponent"
import HomeProfesionalPage from "../pages/profesional/home-profesional-page/HomeProfesionalPage"

const ProfesionalRouter = (): JSX.Element => {
  return (
    <Router>
      <div>

        <h2>Router Profesional</h2>

        <NavComponent />
        <Switch>
          <Route exact path="/profesional" component={ HomeProfesionalPage } />
        </Switch>
      </div>
    </Router>
  )
}

export default ProfesionalRouter

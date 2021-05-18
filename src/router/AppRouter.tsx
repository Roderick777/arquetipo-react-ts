import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { IMenu } from "../interfaces/menu.interface";

import ComunidadPage from "../pages/home/comunidad-page/ComunidadPage";
import DirectorioProfesionalesPage from "../pages/home/directorio-profesionales-page/DirectorioProfesionalesPage";
import GuiaPreciosPage from "../pages/home/guia-precios-page/GuiaPreciosPage";
import HomePage from "../pages/home/home-page/HomePage";
import LoginPage from "../pages/home/login-page/LoginPage";
import RegistrationPage from "../pages/home/registration-page/RegistrationPage";

const menuList: Array<IMenu> = [
  { name: 'Inicio', link: '/', component: HomePage },
  { name: 'Login', link: '/login', component: LoginPage },
  { name: 'Registro', link: '/registrarse', component: RegistrationPage },
  { name: 'Directorio Profesionales', link: '/directorio-profesionales', component: DirectorioProfesionalesPage},
  { name: 'Guía de Precios', link: '/guia-precios', component: GuiaPreciosPage},
  { name: 'Comunidad', link: '/comunidad', component: ComunidadPage}
]

const AppRouter = (): JSX.Element => {
  const [menus] = useState<Array<IMenu>>(menuList)
  
  return (
    <Router>
      <div>
        {/* <NavComponent /> */}
        {/* <div className="text-center">Router inicial sin sesión</div> */}
        <Switch>
          {
            menus.map((e: IMenu, i: number): JSX.Element => (
                <Route exact path={e.link} component={ e.component } key={ `menu_${i}` } />
              )
            )
          }
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter

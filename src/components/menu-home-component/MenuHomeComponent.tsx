import { useState } from 'react'
import { useHistory } from 'react-router'
import { IMenu } from '../../interfaces/menu.interface'
import './MenuHomeComponent.scss'
import { MenuHomeUtil } from './MenuHomeUtil'
import { User, Search } from 'react-feather'

const MenuHomeComponent = (): JSX.Element => {

  const history = useHistory()
  const [menus] = useState<Array<IMenu>>(MenuHomeUtil.getMenu())
  
  const LogoFragment = (): JSX.Element => (
    <div className="logo"></div>
  )

  const MenuListFragment = (): JSX.Element => (
    <ul className="menu">
      {
        menus.map((e: IMenu, i: number): JSX.Element => (
            <li className="p-3" key={`menu_${i}`} onClick={ () => goTo(e)}>
              {e.name}
            </li>
          )
        )
      }
      <li className="d-flex align-items-center px-3">
        <Search />
      </li>
      <li className="d-flex align-items-center px-3">
        <button className="btn btn-primary">Pide Presupuestos</button>
      </li>
      <li className="d-flex align-items-center px-3">
        <div className="avatar avatar-primary mr-2">
          <User className="text-primary" />
        </div>
        <span>Accede</span>
      </li>
    </ul>
  )

  const goTo = (menu: IMenu): void => {
    history.push(menu.link)
  }
  
  return (
    <div className="MenuHomeComponent">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <LogoFragment />
            <MenuListFragment />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuHomeComponent
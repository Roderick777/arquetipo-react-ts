import { useState } from 'react'
import { useHistory } from 'react-router'
import UserService from '../../../services/user.service'
import './LoginPage.scss'

const LoginPage = (): JSX.Element => {

  const history = useHistory()
  const [usuario, setusuario] = useState<string>('')
  const [clave, setclave] = useState<string>('')
  const [loading, setloading] = useState<boolean>(false)
  
  const iniciarSesion = async (): Promise<void> => {
    setloading(true)
    await UserService.login(usuario, clave)
    setloading(false)
  }

  const crearUsuario = (): void => {
    history.push('/registrarse')
  }

  return(
    <div className="login-page">
      <div className="card p-5">
        <div>
          <label>Usuario</label>
          <input type="text" onInput={ (e: any) => setusuario(e.target.value) } />
        </div>
        <div className="mt-2">
          <label>Clave</label>
          <input type="password" onInput={ (e: any) => setclave(e.target.value) } />
        </div>

        <div className="w-100 mt-3">
          <button className="w-100 btn btn-primary" onClick={ () => iniciarSesion() }>Iniciar Sesión</button>
          <button className="w-100 btn btn-primary-outline mt-2" onClick={ () => crearUsuario() }>Registrate</button>

        </div>
      </div>
    </div>
  )
}

export default LoginPage
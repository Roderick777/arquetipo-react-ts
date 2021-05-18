import { Fragment, useLayoutEffect, useState } from 'react'
import AppRouter from './router/AppRouter'
import 'bootstrap/scss/bootstrap-grid.scss'
import './App.scss'
import SessionUtil from './utilities/sesion.util'
import ProfesionalRouter from './router/ProfesionalRouter'
import ContratanteRouter from './router/ContratanteRouter'

function App(): JSX.Element {
  const [hasSession] = useState<boolean>(SessionUtil.hasSession())
  const [profile] = useState<string | null>(SessionUtil.getProfileType())

  useLayoutEffect(() => {
    console.log('hasSession', hasSession)
    console.log('´rpfile', profile)  
  }, [])

  return (
    <Fragment>
      { !hasSession && <AppRouter />}
      { hasSession && profile === 'profesional' && <ProfesionalRouter />}
      { hasSession && profile === 'contratante' && <ContratanteRouter />}
    </Fragment>
  )
}

export default App

import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from 'react-router-dom'
import Page from './coponents/Page'
import Menu from './coponents/Menu'

const Routes = () => {
  const history = useHistory()

  return (
        <Router>
            <Switch history={history}>
                <Route exact path='/fecha/:fecha' component={Menu}/>
                <Route exact path='/' component={Page}/>
                {/* <Route component={'Page404'} /> */}
            </Switch>
        </Router>

  )
}

export default Routes

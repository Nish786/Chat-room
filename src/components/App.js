import React from 'react'
import Signup from './Signup'
import {AuthProvider} from '../contexts/Authcontexts'
import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom'
import Mainpage from './Mainpage'
import Login from './Login'

function App() {
  return (
        <Router>
         <AuthProvider>
          <Switch>
            <Route exact path="/" component={Mainpage} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
         </AuthProvider>
        </Router>
  )
}

export default App

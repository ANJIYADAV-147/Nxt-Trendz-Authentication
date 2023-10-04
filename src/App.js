import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import LoginFrom from './components/LoginForm'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginFrom} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App

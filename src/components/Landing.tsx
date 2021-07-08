import { Route, Switch, NavLink } from "react-router-dom";
import Visual from './Visual'
import Aural from './Aural'
import Sing from './Sing'

function Landing() {
  return (
    <div>
      <header className="App-header">
        <NavLink to="/scroll" activeClassName="scroll">
          Visual Intervals
        </NavLink>

        <NavLink to="/fade-in" activeClassName="fade-in">
          Aural Intervals
        </NavLink>

        <NavLink to="/Fill" activeClassName="Fill">
        Sing Intervals
        </NavLink>

        {/* <NavLink to="/" activeClassName="home">
          home
        </NavLink> */}
    
      </header>

      <main className="App-main">
        <Switch>
          <Route path="/scroll">
            <Visual />
          </Route>

          <Route path="/fade-in">
            <Aural />
          </Route>

          <Route path="/fill">
            <Sing />
          </Route>

        </Switch>
      </main>
    </div>
  )
}

export default Landing;
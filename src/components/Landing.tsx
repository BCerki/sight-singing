import { Route, Switch, NavLink } from "react-router-dom";
import Visual from './Visual'
import Aural from './Aural'
import Sing from './Sing'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import IntervalCard from "./IntervalCard";

function Landing() {
  return (
    <div>
      <header className="App-header">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" >
              Sight Singing
            </Typography>
            <Button color="inherit">
              <NavLink to="/visual" activeClassName="visual">
              See Intervals
              </NavLink>
            </Button>

            <Button color="inherit">
              <NavLink to="/aural" activeClassName="aural">
                Hear Intervals
              </NavLink>
            </Button>

            <Button color="inherit">
              <NavLink to="/sing" activeClassName="sing">
                Sing Intervals
              </NavLink>
            </Button>

          </Toolbar>
        </AppBar>
      </header>

      <main className="App-main">
        <Switch>
          <Route path="/visual">
            <Visual />
          </Route>

          <Route path="/aural">
            <Aural />
          </Route>

          <Route path="/sing">
            <Sing />
          </Route>

        </Switch>

        <IntervalCard title="Visual Intervals" description="View two notes written in sheet music and guess the interval."/>
        <IntervalCard title="Aural Intervals" description="Hear two notes side-by-side and guess the interval."/>
        <IntervalCard title="Sung Intervals" description="It's your turn to sight-sing the intervals and see if your pitch is right!."/>


      </main>
    </div>
  )
}

export default Landing;
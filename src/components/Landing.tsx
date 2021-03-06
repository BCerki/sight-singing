import { Route, Switch, NavLink, Link} from "react-router-dom";
import Visual from './Visual'
import Aural from './Aural'
import Sing from './Sing'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import IntervalCard from "./IntervalCard";
import Grid from '@material-ui/core/Grid'
import './Landing.css'

function Landing() {
  return (
    <div id="landing">
      <header className="App-header">
        <AppBar position="static">
          <Toolbar>
            <Link to="/" className="home">
              <Typography variant="h6" >
                Sight Singing
                </Typography>
              </Link>

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
            < Visual />
          </Route>

          <Route path="/aural">
            <Aural />
          </Route>

          <Route path="/sing">
            <Sing />
          </Route>

          <Route exact path="/">
            <section className="cards">

              <Grid container spacing={3}>
                
                <Grid item xs={4}>
                  <Link to="/visual">
                    <IntervalCard
                      image="https://images.unsplash.com/photo-1591025810539-a321000cda85?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hlZXQlMjBtdXNpY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                      imageTitle="Sheet music"
                      title="Visual Intervals"
                      description="View two notes written in sheet music and guess the interval."
                    />
                  </Link>
                </Grid>
                

                
                  <Grid item xs={4}>
                    <Link to="/aural">
                      <IntervalCard
                        image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        imageTitle="A pair of headphones"
                        title="Aural Intervals"
                        description="Hear two notes side-by-side and guess the interval."
                      />
                    </Link>
                  </Grid>
                
                  <Grid item xs={4}>
                    <Link to="/sing">
                      <IntervalCard image="https://media.istockphoto.com/photos/singer-microphone-vocal-talent-music-show-recital-picture-id1144547914?k=6&m=1144547914&s=612x612&w=0&h=PoGWtQbDzy9LOse62j2Ny_laAeY1MQ4nM-G_9DSeOYo="
                        imageTitle="A person singing into a microphone"
                        title="Vocal Intervals"
                        description="It's your turn to sight-sing the intervals and see if your pitch is right!."
                      />
                    </Link>
                  </Grid>
                
              </Grid>
            </section>
            
          </Route>

        </Switch>

      </main>
    </div>
  )
}

export default Landing;
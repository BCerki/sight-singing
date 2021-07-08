import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
function NavBar() {
  return (
  <section>
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" >
        News
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
  </section>
  )
}

export default NavBar;
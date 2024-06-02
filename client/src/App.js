import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Student from './components/showStudents/showStudents.js';
import CreateStud from './components/createStudents/createStudents.js';
import UseStyles from './styles.js';
import './App.css';


function App() {
  const classes = UseStyles();
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color = "inherit">
          <Typography className={classes.heading} variant="h2" align="center">Students Create & Show</Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justifyContent="space-between" alignItems="stretch">
              <Grid item xs={12} sm ={7}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                  <Student/>
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}>
              <AppBar className={classes.appBar} position="static" color="inherit">
                  <CreateStud/>
                </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>

    </div>
  );
}

export default App;
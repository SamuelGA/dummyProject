import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Homepage } from './pages/home/homePage';
import { Grid } from '@material-ui/core';
import { MainMenu } from './components/mainMenu';
import { Footer } from './components/footer';
import { MicroserviceTestConceptArticle } from './pages/articles/microservice-test-concpet/microservice-test-concept';
import { TechnologiesPage } from './pages/technologies/technologiesPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
      <Grid container>
        <Grid xs={4} style={{height: "100vh"}}>
            <MainMenu width={"600px"} height={"60vh"}/>
        </Grid> 
        <Grid xs={8}>
          <Switch>
            <Route path="/technologies" component={TechnologiesPage}/>
            <Route path="/articles/microservice-build-pipeline" component={MicroserviceTestConceptArticle}/>
            <Route path="/" component={Homepage}/>
          </Switch>
        </Grid>
        <Grid xs={12}>
          <Footer/>
        </Grid>
      </Grid>
      </Router>
    </div>
  );
}

export default App;

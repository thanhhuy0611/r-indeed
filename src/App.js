import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./views/HomePage"
import CandidatesPage from './views/CandidatesPage';
import CompanyPage from './views/CompanyPage';
import NavBar from "./components/NavBar";
import CandidatePage from "./views/CandidatePage";


function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/candidates' exact component={CandidatesPage} />
          <Route path='/company' exact component={CompanyPage} />
          <Route path='/candidates/:id' exact component={CandidatePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

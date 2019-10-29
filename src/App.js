import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
//import router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import redux
import { Provider } from 'react-redux'
import store from './redux/store'
//----import component
import HomePage from "./views/HomePage"
import CandidatesPage from './views/CandidatesPage';
import CompanyPage from './views/CompanyPage';
import NavBar from "./components/NavBar";
import CandidatePage from "./views/CandidatePage";
import DarkFooter from './components/DarkFooter'


function App() {
  return (
    <>
      <Provider store={store}>
      <Router>
        <NavBar />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/candidates' exact component={CandidatesPage} />
            <Route path='/company' exact component={CompanyPage} />
            <Route path='/candidates/:id' exact component={CandidatePage} />
          </Switch>
        <DarkFooter/>
        </Router>
      </Provider>
    </>
  );
}

export default App;

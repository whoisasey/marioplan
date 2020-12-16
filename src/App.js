import React, {Component, Fragment} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import Nav from './components/layout/Nav';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

const App =() => {
  return (
    <Fragment>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/login" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

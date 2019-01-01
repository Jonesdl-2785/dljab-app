import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import About from './about';
import Contact from './contact';
import Resume from './resume';
import Samples from './samples';

const Main = () => (
<Switch>
  <Route exact path="/" component={LandingPage} />
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
  <Route path="/resume" component={Resume} />
  <Route path="/samples" component={Samples} />
</Switch>
);

export default Main;
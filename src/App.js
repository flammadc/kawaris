import React from "react";
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'
import Form from "./components/Form";
import Welcome from "./pages/Welcome";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          {/* Place new routes over this */}
          <Route path="/form" component={Form} />
          <Route path="/" component={Welcome} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

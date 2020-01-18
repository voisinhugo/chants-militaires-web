import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import { MusicList } from "./pages/MusicList";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={"/"} component={MusicList} />
      </Switch>
    </Router>
  );
}

export default App;

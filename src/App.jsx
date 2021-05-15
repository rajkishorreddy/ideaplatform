import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import LandingPg from "./LandingPg";
import Signup from "./Signup";
import Login from "./Login";
const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={LandingPg} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;

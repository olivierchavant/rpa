import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import Connect from './components/Connection/Connect';
import Home from './components/Home';
import Layout from "./UI/Layout";


function App() {
  return (
    
      <Router> 
        <Layout> 
          <Switch> 
            <Route  component={Connect} exact path='/connect' /> 
            <Route component={Home} exact path='/'/> 
          </Switch> 
        </Layout>
      </Router>
  );
}

export default App;

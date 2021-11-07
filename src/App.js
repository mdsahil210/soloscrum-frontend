import './App.css';
import Dashboard from './components/Dashboard.js';
import Header from './components/Layout/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddProject from './components/Project/AddProject';
import UpdateProject from './components/Project/UpdateProject';
import ProjectBoard from './components/ProjectBoard/ProjectBoard';
import AddProjectTask from './components/ProjectBoard/ProjectTasks/AddProjectTask';
import UpdateProjectTask from './components/ProjectBoard/ProjectTasks/UpdateProjectTask';
import Landling from './components/Layout/Landling';
import Register from './components/UserManagement/Register';
import Login from './components/UserManagement/Login';
import jwtDecode from 'jwt-decode';
import setJWTToken from './securityUtils/setJWTToken';
import store from './store';
import { SET_CURRENT_USER } from './actions/types';
import { logout } from './actions/securityActions';
import SecuredRoute from './securityUtils/SecureRoute';

const jwtToken = localStorage.jwtToken;

if(jwtToken){
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwtDecode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  })

  const currentTime = Date.now() / 1000;
  if(decoded_jwtToken.exp < currentTime){
    store.dispatch(logout());
    window.location.href = "/";
  }
  

}

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        

          <Route path="/" exact component={Landling} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />

        <Switch>
          <SecuredRoute path="/dashboard" component={Dashboard} />
          <SecuredRoute path="/addProject" component={AddProject} />
          <SecuredRoute path="/updateProject/:id" component={UpdateProject} />
          <SecuredRoute path="/projectBoard/:id" component={ProjectBoard} />
          <SecuredRoute path="/addProjectTask/:id" component={AddProjectTask} />
          <SecuredRoute path="/updateProjectTask/:backlog_id/:pt_id" component={UpdateProjectTask} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

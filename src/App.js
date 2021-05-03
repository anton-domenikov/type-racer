import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
// import LoginHooks from './components/Login/LoginHooks';
// import Dashboard from './components/Dashboard/notUsed/Dashboard';
import DashboardClass from './components/Dashboard/DashboardClass';
import PreviousGames from './components/Dashboard/PreviousGames';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/game" exact component={DashboardClass}></Route>
        <Route path="/game/previous-games" component={PreviousGames}></Route>
      </Switch>

      {/* <Logout></Logout> */}
      {/* <LoginHooks/> */}
    </div>
  );
}

export default App;

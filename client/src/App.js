import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Detail from "./Components/Detail";
import Home from './Components/Home';
import ActivityForm from './Components/ActivityForm';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
      <Route exact path= "/" component= { LandingPage } />
      <Route exact path = "/home" component= { Home } />
      <Route path="/home/:id" component= { Detail } />
      <Route path="/activity" component= { ActivityForm } />
    
    </Switch>
    </div>
</BrowserRouter>

  );
}

export default App;

import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    //el switch compila en forma de cascada. Si ponemos algo arriba de lo que queremos mostrar, va a colapsar.
    <BrowserRouter>
    <div className="App">
      <Switch> 
      <Route exact path = "/" component={LandingPage}/>
      <Route exact path= '/home' component= {Home}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
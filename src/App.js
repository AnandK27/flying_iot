import './App.css';

import NavBar from "./main_pages/navbar"
import{ BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './main_pages/home'
import DroneControls from './main_pages/drone_control'
import CloudData from './main_pages/cloud_data'
import About from './main_pages/about'
function App() {
  return (
    <div className="App">
    <BrowserRouter> 
    <NavBar />
    <Switch>
    <Route path = '/' exact component = {Home}/>
    <Route path = '/dronecontrol' component = {DroneControls}/>
    <Route path = '/clouddata' component = {CloudData}/>
    <Route path = '/about' component = {About}/>
    </Switch>
    </BrowserRouter>  
    </div>
  );
}

export default App;

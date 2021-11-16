import React from 'react'
import Navbar from "./components/NavBar/Navbar"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact>
           <Home/>
        </Route>
        <Route path="/about" component={About}>
           <About/>
        </Route><Route path="/contact" component={Contact} exact>
           <Contact/>
        </Route><Route path="/signup" component={Signup} exact>
           <Signup/>
        </Route>
      </Switch>
    </Router>
  )
}
export default App;

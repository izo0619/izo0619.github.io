import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import Footer from './components/Footer'
import Education from './components/pages/Education';
import About from './components/pages/About';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/education' exact component={Education} />
        <Route path='/about' exact component={About}/>
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;

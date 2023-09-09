import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact'
import Footer from './components/Footer';
import Bolos from './pages/Bolos'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/bolos' element={<Bolos/>} />
      </Routes>
      <Footer/>
    </Router>
  </div>
}

export default App;

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import AlertState from './context/alert/AlertState';

function App() {
  return (
    <AlertState>
      <Router>
        <Navbar/>
        <div className="container pt-4">
          <Alert/>
          <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/*'} element={<ErrorPage/>}/>
          </Routes>
        </div>
      </Router>
    </AlertState>
    
  );
}

export default App;

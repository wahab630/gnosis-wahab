import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './App.scss';
import Home from './pages/Home';
import Base from './components/layout/Base';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>     
             
    <Base>
    <Routes>
     <Route exact path='/' element={ <Home/> } />
    </Routes>
    </Base>
    
    </Router>
    </>
  );
}

export default App;

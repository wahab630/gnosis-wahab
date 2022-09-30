import './App.css';
import './App.scss';
import Home from './pages/Home';
import Base from './components/layout/Base';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>     
    <header className="App-header">            
    <Base>
    <Routes>
     <Route exact path='/' element={ <Home/> } />
    </Routes>
    </Base>
    </header>
    </Router>
    </>
  );
}

export default App;

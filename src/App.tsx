import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import CreditCheck from './container/CreditCheck/CreditCheck';

import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/credit-check' element={ <CreditCheck/>}/>
          <Route path='/' element={ <Home/>}/>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Header from '../../components/Header/Header';
import CreditCards from '../CreditCards/CreditCards';
import CreditCheck from '../CreditCheck/CreditCheck';

import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/credit-cards/credit-check' element={ <CreditCheck/>}/>
          <Route path='/credit-cards' element={ <CreditCards/>}/>
          <Route path='/' element={ <CreditCards/>}/>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;

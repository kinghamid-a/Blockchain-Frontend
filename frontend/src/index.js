import React from 'react';
import ReactDOM from 'react-dom/client';
import {Router, Switch, Route} from 'react-router-dom';
import './index.css';
import history from './history';
import App from './components/App';
import Blockchain from './components/Blockchain';
import ConductTransaction from './components/ConductTransaction';
import TransactionPool from './components/TransactionPool'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router history = {history}>
      <Switch>
        <Route path = '/' exact component = {App}/>
        <Route path='/blockchain' component={Blockchain}/>
        <Route path='/conduct-transaction' component={ConductTransaction}/>
        <Route path='/transaction-pool' component={TransactionPool}/>
      </Switch>
    </Router>

  </React.StrictMode>
);
 
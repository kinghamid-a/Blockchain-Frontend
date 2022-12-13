import React, {useState, useEffect} from "react";
import logo from '../assets/logo.png';
import { API_BASE_URL } from '../config';
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom'


function App() {

  const [walletInfo, setWalletInfo] = useState({});

  useEffect(() => {
    fetch(`${API_BASE_URL}/wallet/info`)
      .then(response => response.json())
      .then(json => setWalletInfo(json));
  }, []);
  
  const { Address, Balance} =  walletInfo;

  return (
    <div className="App">
      <img className="logo" src={logo} alt="application-logo"/>
      <h3>Welcome to Fahrenheit Blockchain</h3>
      <br/>
      <div className="WalletInfo">
        <div>Address: {Address}</div>
        <div>Balance: {Balance} FHT</div>
        <br/>
        <Link to="/blockchain">Blockchain</Link>
        <br/>
        <Link to="/conduct-transaction">Conduct a Transaction</Link>
        <br/>
        <Link to="/transaction-pool">Transaction Pool</Link>
      
      </div>
    </div>
  );
}

export default App;

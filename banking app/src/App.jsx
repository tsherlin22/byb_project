import { useState } from 'react';
import BankActions from './BankActions';
import './App.css';

function App() {
  const [balance, setBalance] = useState(1000);  // Initial balance
  const [interestRate, setInterestRate] = useState(5);  // Default interest rate

  // Deposit functionality
  const deposit = (amount) => {
    const value = parseFloat(amount);
    if (value > 0) {
      setBalance(prevBalance => prevBalance + value);
    } else {
      alert("Please enter a positive amount for deposit.");
    }
  };

  // Withdraw functionality with overdraft protection
  const withdraw = (amount) => {
    const value = parseFloat(amount);
    if (value > 0) {
      if (balance >= value) {
        setBalance(prevBalance => prevBalance - value);
      } else {
        alert("Insufficient balance. Cannot withdraw more than available funds.");
      }
    } else {
      alert("Please enter a positive amount for withdrawal.");
    }
  };

  // Add interest functionality (only if balance is positive)
  const addInterest = (rate) => {
    if (balance > 0) {
      const interest = (balance * rate) / 100;
      setBalance(prevBalance => prevBalance + interest);
    } else {
      alert("Interest cannot be applied to a negative balance.");
    }
  };

  // Charge fee functionality (ensuring fee is positive)
  const chargeFee = (fee) => {
    const value = parseFloat(fee);
    if (value > 0) {
      setBalance(prevBalance => prevBalance - value);
    } else {
      alert("Please enter a valid fee amount.");
    }
  };

  return (
    <div className="App">
      <h1>Bank Account Simulator</h1>
      <div>
        <h3>Current Balance: ${balance.toFixed(2)}</h3>
        {balance < 0 && <div className="alert alert-danger">Your balance is negative!</div>}
      </div>

      <BankActions
        deposit={deposit}
        withdraw={withdraw}
        addInterest={addInterest}
        chargeFee={chargeFee}
        setInterestRate={setInterestRate}
        interestRate={interestRate}
      />
    </div>
  );
}

export default App;

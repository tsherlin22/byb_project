import React, { useState } from 'react';

function BankActions({
  deposit,
  withdraw,
  addInterest,
  chargeFee,
  setInterestRate,
  interestRate,
}) {
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [feeAmount, setFeeAmount] = useState('');

  const handleDeposit = () => {
    if (depositAmount) {
      deposit(depositAmount);
      setDepositAmount('');
    }
  };

  const handleWithdraw = () => {
    if (withdrawAmount) {
      withdraw(withdrawAmount);
      setWithdrawAmount('');
    }
  };

  const handleInterestRateChange = (e) => {
    setInterestRate(e.target.value);
  };

  const handleAddInterest = () => {
    addInterest(interestRate);
  };

  const handleFeeCharge = () => {
    if (feeAmount) {
      chargeFee(feeAmount);
      setFeeAmount('');
    }
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="deposit" className="form-label">Deposit Amount</label>
        <input
          type="number"
          id="deposit"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
          className="form-control"
        />
        <button onClick={handleDeposit} className="btn btn-success mt-2">Deposit</button>
      </div>

      <div className="mb-3">
        <label htmlFor="withdraw" className="form-label">Withdraw Amount</label>
        <input
          type="number"
          id="withdraw"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
          className="form-control"
        />
        <button onClick={handleWithdraw} className="btn btn-danger mt-2">Withdraw</button>
      </div>

      <div className="mb-3">
        <label htmlFor="interestRate" className="form-label">Interest Rate (%)</label>
        <input
          type="number"
          id="interestRate"
          value={interestRate}
          onChange={handleInterestRateChange}
          className="form-control"
        />
        <button onClick={handleAddInterest} className="btn btn-info mt-2">Add Interest</button>
      </div>

      <div className="mb-3">
        <label htmlFor="fee" className="form-label">Fee Amount</label>
        <input
          type="number"
          id="fee"
          value={feeAmount}
          onChange={(e) => setFeeAmount(e.target.value)}
          className="form-control"
        />
        <button onClick={handleFeeCharge} className="btn btn-warning mt-2">Charge Fee</button>
      </div>
    </div>
  );
}

export default BankActions;

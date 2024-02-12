import { useState } from 'react';
import { db } from "./firebase.js";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; // Latest Firestore syntax
import { validateAddress } from '../utils/validation.js'; // Assuming validation logic is in a separate file

const TransactionForm = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform validation in the component to provide immediate feedback
    const errors = validateAddress(walletAddress, amount);
    if (errors.length > 0) {
      setErrorMessage(errors.join('\n'));
      return;
    }

    try {
      // Add transaction to Firestore
      const transactionCollection = collection(db, 'transactions')
      const transactionRef = await addDoc(transactionCollection, {
        walletAddress,
        amount,
        timestamp: serverTimestamp(), // Use serverTimestamp for reliable time
      });

      console.log('Transaction added:', transactionRef.id);
      setWalletAddress('');
      setAmount('');
      setErrorMessage('Transaction submitted successfully!'); // Informative success message
    } catch (error) {
      console.error('Error adding transaction:', error);
      setErrorMessage('An error occurred. Please try again later.'); // Generic error message with action
    }
  };

  return (
    <form className='flex items-center justify-center my-4' onSubmit={handleSubmit}>
     <div className='flex flex-col items-center justify-start border-2 border-neutral-300 rounded-lg w-96 m-2'>
      <div className='w-full p-2'>
          <label htmlFor="walletAddress">Wallet Address:</label>
          <input
            className='w-full rounded-lg'
            type="text"
            id="walletAddress"
            required 
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
        </div>

        <div className='w-full p-2 rounded-lg'>
          <label htmlFor="amount">Amount:</label>
          <input
            className='w-full rounded-lg'
            type="number"
            id="amount"
            min="0"
            max="10000"
            step="0.01"
            required 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {errorMessage && <p className="text-rose-800 text-2xl font-semibold p-2">{errorMessage}</p>}

        <div className='w-full p-2'>
          <button className='w-full bg-transparent border-2 border-[#ee7674] text-[#ee7674] hover:bg-[#ee7674] hover:text-white rounded-lg font-bold p-2' type="submit" disabled={!walletAddress || !amount}>
            Add Ethers
          </button>
        </div>
     </div>
    </form>
  );
};

export default TransactionForm;

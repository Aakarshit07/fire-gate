import { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

function DataPage() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'transactions'));
        const transactionsData = querySnapshot.docs.map((doc) => {
          // Handle potential timestamp types gracefully
          const timestamp = doc.data().timestamp;
          const formattedTimestamp = timestamp?.toDate()?.toLocaleString() || 'No timestamp available';

          return { ...doc.data(), formattedTimestamp };
        });
        setTransactions(transactionsData);
      } catch (error) {
        console.error('Error fetching transactions:', error);
        // Display a user-friendly error message to the user
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className='flex flex-wrap items-center justify-center p-2 m-2'>
      {transactions.map((transaction, index) => (
        <div key={index} className="flex flex-col items-start px-2 m-2 font-semibold text-white border-2 bg-neutral-300/30 hover:border-neutral-200 w-96 rounded-lg">
          <div className='py-2'>
              <h3 className='font-bold text-slate-900 break-words text-ellipsis'>Wallet Address:</h3>
              <p className='text-amber-800'>{transaction.walletAddress}</p>
          </div>
          <div className='py-2'>
            <h3 className='font-bold text-slate-900 break-words text-ellipsis'>Transaction Amount: </h3>
            <p className='text-amber-800'>{transaction.amount}</p>
          </div>
          <div  className='py-2'>
              <h3 className='font-bold text-slate-900 break-words text-ellipsis'>TimeStamp:</h3>
              <p className='text-amber-800'>{transaction.formattedTimestamp}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DataPage;

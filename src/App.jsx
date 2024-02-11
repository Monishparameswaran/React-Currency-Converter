import React, { useState } from 'react';
import InputBox from './components/inputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [From, setFrom] = useState('usd');
  const [To, setTo] = useState('inr');
  const data = useCurrencyInfo(From);
  const options = Object.keys(data);
  const [amount, setAmount] = useState(0);
  const [correctAmount, setCorrectAmount] = useState(amount);

  const convert = () => {
    setCorrectAmount(amount * data[To]);
  };

  return (
    <>
      <div className="h-screen " style={{backgroundImage: `url(https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=600)`}}>
        <div className="flex items-center justify-center h-screen">
          <form
            className="max-w-md mx-auto bg-white bg-opacity-80 rounded-md shadow-md p-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <h2 className="text-2xl font-bold mb-4 text-center text-yellow">Currency Converter</h2>
            <div>
              <InputBox
                label="From"
                Currency={amount}
                onCurrencyChange={(e) => setFrom(e)}
                currencyOptions={options}
                CurrencyMethod={(amount) => setAmount(amount)}
              />
            </div>
            <div>
              <InputBox
                label="To"
                enabled={true}
                onCurrencyChange={(e) => setTo(e)}
                currencyOptions={options}
                Currency={correctAmount}
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-violet-700 text-white rounded-md hover:bg-violet-500 transition duration-300 shadow-md"
            >
              Convert {From} to {To}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

import React from 'react';
import Total from './components/total/Total';
import History from './components/history/History';
import operation from './components/operation/Operation';
import Operation from './components/operation/Operation';
import Widget from './components/Widjet';

function App() {
  return (
    <>
      <header>
          <h1>Кошелек</h1>
          <h2>Калькулятор расходов</h2>
        </header>

      <main>
        <div className='container'>
         // <Total />
         // <History />            
         // <Operation />
          <Widget />
        </div>
      </main>

    </>
  );
}

export default App;

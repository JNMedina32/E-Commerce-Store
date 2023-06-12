import CallAPI from './CallAPI';
import './App.css';
import Banner from './Banner';
import { useState } from 'react';


function App() {

  const [searchProducts, setSearchProducts] = useState('');



  return (
    <div className="App">
      <Banner />
      <CallAPI />
    </div>
  );
}

export default App;

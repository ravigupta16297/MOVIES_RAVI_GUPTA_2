
import { useState } from 'react';
import './App.css';
import Home from './compo/Home';
import Navbar from './compo/Navbar';

function App() {
  const [loading, setLoading] = useState(false);
  return (
   <>
   <Navbar loading={loading} setLoading={setLoading}/>
   <Home loading={loading} setLoading={setLoading} />
   </>
  );
}

export default App;

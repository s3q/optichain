import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Homescreen from './Screens/Homescreen';
import { BankingPortfolio } from './Screens/tWorksScreen';
import ServiceScreen from './Screens/ServiceScreen';
import SOneScreen from './Screens/Services/SOneScreen';

function App() {
  const [count, setCount] = useState(0)

  return (
 <Router>
      
      <Routes>
        <Route path="/works" element={<BankingPortfolio />} />
        <Route path="/" element={<Homescreen />} />
        <Route path="/service" element={<ServiceScreen />} />
        <Route path="/service/1" element={<SOneScreen />} />
          <Route path="*" element={<Navigate to="/" />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>

    </Router>
  )
}

export default App

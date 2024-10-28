import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Welcome from './screens/Welcome';
import Bookingscreen from './screens/Bookingscreen';

function App() {
  return (
    <div className="App">
     <Router>
        <Navbar />

        {/* Wrap Route in Routes */}
        <Routes>
          {/* Correct syntax for Route in React Router v6 */}
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Homescreen />} />
          <Route path='/book/:roomid' element={<Bookingscreen />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
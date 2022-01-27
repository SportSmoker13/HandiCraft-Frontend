import logo from './logo.svg';
import './App.css';
import Navbar from './components/Header/Navbar';
import { BrowserRouter, Route, Routes, unstable_HistoryRouter } from 'react-router-dom';
import SignIn from './components/Auth/SignIn';
import Footer from './components/Footer/Footer';
import SignUp from './components/Auth/SignUp';
import Home from './components/Home/Home';

function App() {
  
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<App />} /> */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

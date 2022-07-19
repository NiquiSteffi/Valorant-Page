import './App.css';
import { LandingPage } from './pages/LandingPage';
import { AgentDetails } from './pages/AgentDetails';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from './components/Header';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        {/* <Header /> */}
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/agent/:uuid" element={<AgentDetails />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

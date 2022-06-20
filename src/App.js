import './App.css';
import { LandingPage } from './pages/LandingPage';
import { AgentDetails } from './pages/AgentDetails';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
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

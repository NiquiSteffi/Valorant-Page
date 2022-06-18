import './App.css';
import { LandingPage } from './pages/LandingPage';
import { AgentDetails } from './pages/AgentDetails';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Link to="/"><h1>HOME</h1></Link>
        </header>
        <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/agent/:agent.uuid" element={<AgentDetails />} />
            </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

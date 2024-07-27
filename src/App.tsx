import { ParticlesSetup } from './lib/ParticlesSetup';
import { Home } from './components/Home';
import DotRing from './components/Mouse';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DotRing/>
        <div className="particles-container">
        <ParticlesSetup/>
        </div>
        <Home/>
      </header>
    </div>
  );
}

export default App;

import { ParticlesSetup } from './lib/ParticlesSetup';
import { Home } from './components/Home';
import DotRing from './components/Mouse';
import {Footer} from './components/Footer';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <DotRing/>
        <div className="particles-container">
        <ParticlesSetup/>
        </div>
        <div className="content">
        <Home/>
        </div>
      </header>
      <Footer/>
    </div>
  );
}

export default App;

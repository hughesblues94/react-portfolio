import Navbar from './components/Navbar'
import Bio from './components/Bio'
import Image from './components/Image'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className='content'>
        <Image />
        <Bio />
      </div>
    </div>
  );
}

export default App;

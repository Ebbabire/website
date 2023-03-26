import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-slate-200 flex flex-col h-full">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;

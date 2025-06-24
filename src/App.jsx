import logo from './logo.svg';
import './App.scss';
import LiveParking from './components/LiveParking';
import Mainslide from './components/Mainslide';
import Bannerslide from './components/Bannerslide';


function App() {
  return (
    <div className="App">
      <Mainslide />
      <LiveParking />
      <Bannerslide />

    </div>
  );
}

export default App;

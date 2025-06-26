import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Usage from './components/Usage';
import UsageDetails from './components/UsageDetails';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/usage' element={<Usage />}/>
        <Route path='/usage/details/:num' element={<UsageDetails />}/>
      </Routes>
    
      <Footer />
    </div>
  );
}

export default App;

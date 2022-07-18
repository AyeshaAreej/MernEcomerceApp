//import {BrowserRouter as Router , Route} from 'react-router-dom'
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './components/Home';


function App() {
  return (

      
      <div className="App">
       <Header/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
     </Routes>
     <Footer/>
      </div>
     
    
       
        
    
  );
}

export default App;

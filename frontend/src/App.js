
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import LandingPage from './screens/LandingPage/LandingPage';
import{BrowserRouter, Route, Routes} from 'react-router-dom';
import MyNotes from './screens/Mynotes/MyNotes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
          <Route path='/' element={<LandingPage/>} exact/>
          <Route path='/mynotes'element={<MyNotes/>}/>
          </Routes>
        
        </main>
        <Footer />
        </BrowserRouter>
      
      

    </div>
  );
}

export default App;

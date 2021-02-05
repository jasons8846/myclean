import './App.css';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import Carousel from './components/carousel';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div><Carousel /></div>
      
      <Jumbotron />
    </div>
  );
}

export default App;

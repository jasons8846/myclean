import './App.css';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import Carousel from './components/carousel';
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Jumbotron />
      <Footer />
    </div>
  );
}

export default App;

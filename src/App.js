import '../src/styles/index.scss';
import 'font-awesome/css/font-awesome.min.css';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Jobs from './Components/Jobs';
import Projects from './Components/Projects'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Jobs/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;

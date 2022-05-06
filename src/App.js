import './App.css';
import Homepage from './pages/Homepage'
import Navigator from './components/Navigator'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Navigator/>
      <Homepage/>
      <Footer/>
    </div>
  );
}

export default App;

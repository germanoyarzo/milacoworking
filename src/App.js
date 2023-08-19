import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './components/Services';


function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        <Navbar />  
         {/* WhatsApp icon */}
         <a
                href="https://wa.me/2235284965"
                class="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i class="fa fa-whatsapp whatsapp-icon"></i>
          </a>
        <Services />   
        <Footer />
    </div>
    
  );
}

export default App;

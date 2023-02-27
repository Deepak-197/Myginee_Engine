// import logo from './logo.svg';
import './App.css';
// import { Register } from './Components/Pages/Authentication/Register';
// import { Header } from './Components/Header/Header';
// import { IndivisualCategory } from './Components/IndivisualCategory/IndivisualCategory';
// import { Navbar } from './Components/Navbar/Navbar';
// import { Section } from './Components/Section/Section';
// import { Services } from './Components/Services/Services';
// import { ServiceSlide } from './Components/ServiceSlide/ServiceSlide';
// import { Slideshow } from './Components/Slideshow/Slideshow';
// import { ViewAllitem } from './Components/Pages/ViewAllitem/ViewAllitem';
// import { Homepage } from './Components/Homepage/Homepage';
import { MainRouter } from './Components/Routes/MainRouter';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Navbar />
      <Section />
      <Slideshow />
      <Services />
      <ServiceSlide />
      <IndivisualCategory />
      <IndivisualCategory />
      <IndivisualCategory />
      <IndivisualCategory />
      <IndivisualCategory /> */}
      {/* <Homepage />
      <ViewAllitem /> */}
      <MainRouter />

      {/* <Register /> */}
    </div>
  );
}

export default App;

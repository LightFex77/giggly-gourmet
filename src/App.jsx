import {BrowserRouter ,Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Menus from "./components/Menus";
import Us from "./components/Us";
import Contact from "./components/Contact";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
    <NavMenu />
    <Routes>
      <Route path="/" element= {<Home />}/>
      <Route path="/menus" element= {<Menus />}/>
      <Route path="/nosotros" element= {<Us />}/>
      <Route path="/contacto" element= {<Contact />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App

import OptionMenu from "./inputs/OptionMenu"
import "../styles/windows.css";
import {images} from "../images";


const Menus = () => {
    return (
      <div className="container-menu-section">
        <div className="container-menu-title">
          <h1>MENUS</h1>
        </div>
        <section className="container-menu-options">
          <OptionMenu image={images.breakfast} textButton="Desayuno"/>
          <OptionMenu image={images.lunch} textButton="Almuerzo"/>
          <OptionMenu image={images.dinner} textButton="Cena"/>
        </section>
      </div>
    )
  }
  
  export default Menus
  
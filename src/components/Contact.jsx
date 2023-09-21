import Button from "./inputs/Button";
import Input from "./inputs/Input";
import Map from "./inputs/Map";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="container-menu-title">
        <h1>CONTACTO</h1>
      </div>
      <section className="contact-container-location">
        <div className="contact-container-location-maps">
          <Map />
        </div>
        <div className="contact-container-location-text">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            ipsam veritatis eaque eos sit commodi, magnam velit delectus totam.
            Optio similique iste officiis eaque sed magni beatae rem, ab quam?
          </p>
        </div>
      </section>
      <section className="contact-container-message">
        <form>
          <Input labelText="Nombre" placeholder="Juan" id="nombre" />
          <Input
            labelText="Apellido"
            placeholder="Estigarribia"
            id="apellido"
          />
          <Input labelText="Email" placeholder="example@email.com" id="email" />
          <textarea placeholder="Escribe tu mensaje aquí"></textarea>
        </form>
        <Button childreen="Enviar" />
      </section>
    </div>
  );
};

export default Contact;

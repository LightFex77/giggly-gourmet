import { useNavigate } from "react-router-dom";
import { images } from "../images";
import { onClickRedirect } from "../utils/functions";
import Button from "./inputs/Button";

// eslint-disable-next-line react/prop-types
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <main>
        <section className="home-container-main-logo">
          <div className="main-logo-img">
            <img src={images.logo} />
            <h1>Jiggly Gourmet</h1>
          </div>
        </section>
        <div className="home-container-main-see-menu">
          <section className="main-see-menu-images">
            <img src={images.food_1} />
            <img src={images.food_2} />
            <img src={images.food_3} />
          </section>
          <section className="main-see-menu-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              omnis tempora tenetur, minus cupiditate eveniet quia quasi
              exercitationem magni iste voluptatibus aspernatur labore dolor
              harum odit similique nobis non vel.
            </p>
            <Button
              childreen="Ver Menus"
              onClick={() => onClickRedirect(navigate, "/menus")}
            ></Button>
          </section>
        </div>
      </main>
      <div className="home-container-about">
        <section className="home-container-about-img">
          <img src={images.restaurant} />
        </section>
        <section className="home-container-about-text">
          <h1>Nosotros</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, nobis doloremque, nam veniam a nemo iste reiciendis
            nostrum vel deserunt molestias adipisci rerum ducimus dicta? Quaerat
            omnis cumque molestias nisi!
          </p>
          <span>
            <Button
              childreen="Ver mas"
              onClick={() => onClickRedirect(navigate, "/nosotros")}
            />{" "}
            <Button
              childreen="Contacto"
              onClick={() => onClickRedirect(navigate, "/contacto")}
            />
          </span>
        </section>
      </div>
    </div>
  );
};

export default Home;

import styles from "./Header.module.css";
import { useLocation } from "react-router-dom";
import Logotipo from "./Logotipo";
import { useNavigate } from "react-router-dom";
import nuevo from "../../public/img/Nuevo.png";
import principal from "../../public/img/Home.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isAddVideoRoute = location.pathname === "/add-video";

  if (isAddVideoRoute) {
    return (
      <header className={styles.cabecera}>
        <Logotipo />
      </header>
    );
  }

  // Si no estamos en la ruta "/add-video", mostramos el botón
  return (
    <header className={styles.cabecera}>
      <Logotipo />
      <nav className={styles.logoContainer}>
        <button onClick={() => navigate("/add-video")}>
          <img src={nuevo} alt="Logo Alura" />
        </button>
        <button onClick={() => navigate("/")}>
          <img src={principal} alt="Logo Alura" />
        </button>
      </nav>
    </header>
  );
};

export default Header;

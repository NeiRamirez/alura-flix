import Logotipo from "./Logotipo";
import styles from "./Footer.module.css";
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.cabecera}>
        <Logotipo />
        <h1>Nei Ramirez Gonzalez</h1>
      </div>     
    </>
  );
};
export default Footer;


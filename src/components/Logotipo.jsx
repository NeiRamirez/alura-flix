import { Link } from "react-router-dom";
import logo from "../../public/img/LogoMain.png";
import styled from "styled-components";
const Logo = styled.img`
  display: flex;
  width: 168.45px;
  height: 40px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  @media screen and (max-width: 768px) {
    width: 10.5208rem;
    height: 2.5rem;
  }
`;

const Logotipo = () => {
  return (
    <Link to="/">
      <Logo className="header__logo" src={logo} alt="logo SofiDev" />
    </Link>
  );
};

export default Logotipo;

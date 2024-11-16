import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { createGlobalStyle, styled } from "styled-components";

export default function Header() {
  return (
    <>
      <GlobalStyle />
      <HeaderContainer>
        <img src={logo} alt="LogoMarca" />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="Novidades">Novidades</Link>
            </li>
            <li>
              <Link to="Sobre">Sobre</Link>
            </li>
          </ul>
        </nav>
      </HeaderContainer>
    </>
  );
}

//Styled
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;  
    list-style: none;
  }
  `;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;
  align-items: center;
  height: 15vh;

  img {
    width: 7%;
  }
  nav {
    align-content: center;
    width: 30%;

    ul {
      display: flex;
      justify-content: space-around;

      li {
        &:hover {
          transform: scale(1.1);
          transition: 0.3s ease-in-out;
        }
        a {
          font-size: 1.5rem;
          font-family: "Poppins", sans-serif;
          color: #1e3932;
        }
      }
    }
  }
`;

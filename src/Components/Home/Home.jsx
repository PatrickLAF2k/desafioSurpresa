import { useState } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

import frappucino1 from "../../assets/frappucino1.png";
import frappucino2 from "../../assets/frappucino2.png";
import frappucino3 from "../../assets/frappucino3.png";

export default function Home() {
  const [frappucinoSelecionado, setFrappucinoSelecionado] =
    useState(frappucino1);
  const [corDeFundo, setCorDeFundo] = useState("#037143");

  const selecionarFrappucino1 = () => {
    setFrappucinoSelecionado(frappucino1);
    setCorDeFundo("#037143");
  };
  const selecionarFrappucino2 = () => {
    setFrappucinoSelecionado(frappucino2);
    setCorDeFundo("#97090C");
  };
  const selecionarFrappucino3 = () => {
    setFrappucinoSelecionado(frappucino3);
    setCorDeFundo("#DECD13");
  };

  return (
    <>
      <GlobalStyle />
      <ContainerMain>
        <ContainerTexts>
          <Titulo>Mais que Café</Titulo>
          <SubTitulo>
            Isso é <span>Starbucks</span>
          </SubTitulo>
          <TextoPrincipal>
            A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
            dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
            Latte Macchiato e o Espresso. Além disso, a Starbucks oferece
            bebidas quentes e frias, doces diferenciados e sanduíches.
          </TextoPrincipal>
          <Botao
            target="_blank"
            href="https://www.starbucksathome.com/br/blog.html"
          >
            SAIBA MAIS
          </Botao>
        </ContainerTexts>

        <ContainerCopo corDeFundo={corDeFundo}>
          <img src={frappucinoSelecionado} alt="Frappucino Selecionado" />
        </ContainerCopo>

        <ContainerCopos>
          <button onClick={selecionarFrappucino1}>
            <img src={frappucino1} alt="Frappucino 1" />
          </button>
          <button onClick={selecionarFrappucino2}>
            <img src={frappucino2} alt="Frappucino 2" />
          </button>
          <button onClick={selecionarFrappucino3}>
            <img src={frappucino3} alt="Frappucino 3" />
          </button>
        </ContainerCopos>
      </ContainerMain>
    </>
  );
}

//STYLE--------------------------------------------------

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;  
    list-style: none;
    border: none;
  }
`;

const ContainerMain = styled.main`
  height: 80vh;
  position: absolute;
`;

const ContainerTexts = styled.section`
  width: 40%;
  height: 55%;
  margin: 3rem 0 0 5rem;
  font-family: "Poppins", serif;
`;

const Titulo = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  color: #000000cc;
  font-family: "Inter", serif;
`;

const SubTitulo = styled.h2`
  font-size: 4rem;
  font-weight: 400;
  color: #000000;
  margin-bottom: -1.6rem;

  span {
    color: #037143;
    font-size: 6rem;
    font-weight: 600;
  }
`;

const TextoPrincipal = styled.p`
  font-size: 1.5rem;
  color: #000000;
  margin-bottom: 2rem;
`;

const Botao = styled.a`
  background-color: #037143;
  color: #ffffff;
  padding: 0.6rem 2.5rem;
  border-radius: 30px;
  font-size: 1.2rem;
  font-family: "Inter", serif;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

const ContainerCopos = styled.div`
  display: flex;
  margin: 8% auto;
  gap: 2rem;
  width: 30%;

  button {
    background-color: transparent;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.3) rotate(10deg);
    }

    img {
      width: 60%;
      transform: rotate(-10deg);
    }
  }
`;

// Animação do copo
const animacaoCopo = keyframes`
0% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg); 
  }
  100% {
    transform: rotate(-10deg);
  }
`;
const ContainerCopo = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  top: 40%;
  right: -15%;
  width: 50%;
  height: 100%;
  background-color: ${(props) => props.corDeFundo};

  img {
    position: fixed;
    width: 27%;
    right: 7%;
    top: 32%;
    animation: ${animacaoCopo} 5s ease-in-out infinite;
  }
`;

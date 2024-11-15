import styled, { createGlobalStyle, keyframes } from "styled-components";
import cafe from "../../assets/cafe.png";

export default function Novidades () {
  return (
    <>
      <GlobalStyle />
      <ContainerMain>
        
        <ContainerTexts>
          <Titulo>PREPARAÇÃO</Titulo>

          <SubTitulo>Níveis de torra</SubTitulo>

          <TextoPrincipal>
            Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou
            Torra Escura? Estas sãos as torras que fazem parte dos níveis de
            torra Starbucks®
          </TextoPrincipal>

          <Botao
            target="_blank"
            href="https://www.starbucksathome.com/br/blog.html"
          >
            SAIBA MAIS
          </Botao>
        </ContainerTexts>
        <img src={cafe} alt="" />
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
  height: 85vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #1E3932;
  

  img {
    width: 30%;
  }
`;

const ContainerTexts = styled.section`
  width: 40%;
  font-family: "Poppins", serif;
`;

const Titulo = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #FFFFFF;
  font-family: "Inter", serif;
`;

const SubTitulo = styled.h2`
  font-size: 4rem;
  font-weight: 400;
  color: #FFFFFF;
`;

const TextoPrincipal = styled.p`
  font-size: 1.5rem;
  color: #FFFFFF;
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
    background-color: #037143;
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

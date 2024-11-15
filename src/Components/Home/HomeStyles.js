import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;  
    list-style: none;
    border: none;
  }
`;

export const ContainerMain = styled.main`
  height: 80vh;
  position: absolute;
`;

export const ContainerTexts = styled.section`
  width: 40%;
  height: 55%;
  margin: 3rem 0 0 5rem;
  font-family: "Poppins", serif;
`;

export const Titulo = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  color: #000000cc;
  font-family: "Inter", serif;
`;

export const SubTitulo = styled.h2`
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

export const TextoPrincipal = styled.p`
  font-size: 1.5rem;
  color: #000000;
  margin-bottom: 2rem;
`;

export const Botao = styled.a`
  background-color: #037143;
  color: #ffffff;
  padding: 0.6rem 2.5rem;
  border-radius: 30px;
  font-size: 1.2rem;
  font-family: "Inter", serif;
`;

export const ContainerCopos = styled.div`
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

export const ContainerCopo = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  top: 40%;
  right: -15%;
  width: 50%;
  height: 100%;
  background-color: #037143;

  img {
    position: fixed;
    width: 27%;
    right: 7%;
    top: 32%;
    transition: 0.5s ease-in-out;
  
    &:hover {
      transform: scale(1.3);
      transition: 0.3s ease-in-out;
    }
  }
`;

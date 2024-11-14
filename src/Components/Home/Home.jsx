import { useState } from "react";
import {
  GlobalStyle,
  ContainerMain,
  ContainerTexts,
  Titulo,
  SubTitulo,
  TextoPrincipal,
  Botao,
  ContainerCopos,
  ContainerCopo,
} from "./HomeStyles";

import frappucino1 from "../../assets/frappucino1.png";
import frappucino2 from "../../assets/frappucino2.png";
import frappucino3 from "../../assets/frappucino3.png";

export default function Home() {
  const [frappucinoSelecionado, setFrappucinoSelecionado] = useState(frappucino1);

  const selecionarFrappucino1 = () => setFrappucinoSelecionado(frappucino1);
  const selecionarFrappucino2 = () => setFrappucinoSelecionado(frappucino2);
  const selecionarFrappucino3 = () => setFrappucinoSelecionado(frappucino3);

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
          <Botao href="#">SAIBA MAIS</Botao>
        </ContainerTexts>

        <ContainerCopo>
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

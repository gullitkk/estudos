import React, { useEffect, useState } from "react";
import Banner from './components/Banner'; //colocando o nome de index.jsx voce so precisa colocar o nome da pasta no import pois o import ja identifica o jsx//
import Formulario from './components/Formulario';//criamos um arquivo chamado index.jsx e la exportamos e importamos oque a gente quiser, esse metodo e parecido com o do banner de so renomear o arquivo para index.jsx mas aqui o nosso arquivo principal continua com o nome desejado e a gente escolhe oque quer importar, a partir de agora vou usar esse jeito// 
import Posicao from "./components/Posicao";

function App() {
  // chamamos o banner pra dentro da function ou seja para ele aparecer, fechamos ele com o /> e o vs code automaticamente fez um import la em cima desse componete que a gente criou//
  // o react e isso a gente cria componetes e importa pro principal // 
  // tiramos as coisas do campo texto daqui pois vamos iplementar ele no formulario, como ele vai ficar dentro do formulario e mais facil de  importar ele la, e depois so exporta o formulario aqui//

  const [campeaoes, setCampeao]= useState()

  const aoNovoCampeaoAdicionado = (campeao) => {
    console.log(campeao)
    setCampeao([campeaoes, campeao])
  } //a funçao e responsavel por mandar um console.log de campeao, e a mudar a lista de campeaos, com a função setCampeao que e responsavel por ler e editar, paranteses para acionar e colchete para criar uma lista colocando o campeaos que seria a lista com campeao que seria o paramento que ta vindo a cada submit//

  return (
    <>  
      <Banner />
      <Formulario aoCampeaoCadastrado={campeao => aoNovoCampeaoAdicionado(campeao)} />
      <Posicao nome='Top lane' />
      <Posicao nome='Bot lane' />
      <Posicao nome='Mid lane' />
      <Posicao nome='Jungle' />
    </>
  ) // aoCampeaoCadastrado e um props q e igual a campeao q e igual a uma arrow function chamada aoNovoCampeaoAdicionado que usa o campeao como parametro//
}

export default App

import React, { useEffect, useState } from "react";
import Banner from './components/Banner'; //colocando o nome de index.jsx voce so precisa colocar o nome da pasta no import pois o import ja identifica o jsx//
import Formulario from './components/Formulario';//criamos um arquivo chamado index.jsx e la exportamos e importamos oque a gente quiser, esse metodo e parecido com o do banner de so renomear o arquivo para index.jsx mas aqui o nosso arquivo principal continua com o nome desejado e a gente escolhe oque quer importar, a partir de agora vou usar esse jeito// 
import Posicao from "./components/Posicao";

function App() {
  // chamamos o banner pra dentro da function ou seja para ele aparecer, fechamos ele com o /> e o vs code automaticamente fez um import la em cima desse componete que a gente criou//
  // o react e isso a gente cria componetes e importa pro principal // 
  // tiramos as coisas do campo texto daqui pois vamos iplementar ele no formulario, como ele vai ficar dentro do formulario e mais facil de  importar ele la, e depois so exporta o formulario aqui//

  const posicao = [
    {
      nome: 'Top lane',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Mid lane',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Bot lane',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'jungle',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    }
  ]

  const [campeaos, setCampeao]= useState()

  const aoNovoCampeaoAdicionado = (campeao) => {
    console.log(campeao)
    setCampeao([campeaos, campeao])
  } //a funçao e responsavel por mandar um console.log de campeao, e a mudar a lista de campeaos, com a função setCampeao que e responsavel por ler e editar, paranteses para acionar e colchete para criar uma lista colocando o campeaos que seria a lista com campeao que seria o paramento que ta vindo a cada submit//

  return (
    <>  
      <Banner />
      <Formulario itens={posicao.map(posicao => posicao.nome)} aoCampeaoCadastrado={campeao => aoNovoCampeaoAdicionado(campeao)} />
        {posicao.map(posicao => 
  <Posicao 
          key={posicao.nome}
          nome={posicao.nome}
          corPrimaria={posicao.corPrimaria}
          corSecundaria={posicao.corSecundaria}
          campeaos={campeaos}
        />)}
    </>
    // no formulario criamos um itens que seria o nome das posiçãos no select, e como esses nomes ja tavam definido no posicao, a gnt igualou o itens a posicao.map uma das funçãos do map  e ele pega uma lista e retorna oque eu quiser dessa lista, ai eu falei eu quero que ele pegue a lista posicao e me retorne apenas o posicao.nome que seria os nomes vale lembrar que estou passando como props então no componete tenho q dizer props.tal coisa// 
    //no posicao.map usamos outra função do map que seria renderizar diferentes partes de uma lista de forma dividada, por isso que la falamos posicao.map que seria a lista, quero que retorne posicao e a cada posicao eu quero que ele renderize dentro do componete Posicao um nome que seria posicao.nome e as cores que esta descrito acima,vale lembrar que estou passando como props então no componete tenho q dizer props.tal coisa// 
  ) // aoCampeaoCadastrado e um props q e igual a campeao q e igual a uma arrow function chamada aoNovoCampeaoAdicionado que usa o campeao como parametro//
}

export default App
  
import { useState } from 'react';
import Banner from './components/Banner'; //colocando o nome de index.jsx voce so precisa colocar o nome da pasta no import pois o import ja identifica o jsx//
import CampoTexto from './components/CampoTexto'; //criamos um arquivo chamado index.jsx e la exportamos e importamos oque a gente quiser, esse metodo e parecido com o do banner de so renomear o arquivo para index.jsx mas aqui o nosso arquivo principal continua com o nome desejado e a gente escolhe oque quer importar, a partir de agora vou usar esse jeito// 

function App() {
  
  const [count, setCount] = useState(0)
  // chamamos o banner pra dentro da function ou seja para ele aparecer, fechamos ele com o /> e o vs code automaticamente fez um import la em cima desse componete que a gente criou//
  // o react e isso a gente cria componetes e importa pro principal // 
  return (
    <>  
      <Banner />
      <CampoTexto />
    </>
  )
}

export default App

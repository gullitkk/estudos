import { useState } from 'react';
import Banner from './components/Banner'; //colocando o nome de index.jsx voce so precisa colocar o nome da pasta no import pois o import ja identifica o jsx//

function App() {
  
  const [count, setCount] = useState(0)
  // chamamos o banner pra dentro da function ou seja para ele aparecer, fechamos ele com o /> e o vs code automaticamente fez um import la em cima desse componete que a gente criou//
  // o react e isso a gente cria componetes e importa pro principal // 
  return (
    <>  
      <Banner />
    </>
  ) 
}

export default App

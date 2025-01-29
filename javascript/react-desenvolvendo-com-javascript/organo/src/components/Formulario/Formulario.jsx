import  Botao  from '../Botao'
import CampoTexto from '../CampoTexto' //criamos um arquivo chamado index.jsx e la exportamos e importamos oque a gente quiser, esse metodo e parecido com o do banner de so renomear o arquivo para index.jsx mas aqui o nosso arquivo principal continua com o nome desejado e a gente escolhe oque quer importar, a partir de agora vou usar esse jeito// 
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import React, { useEffect, useState } from "react";

export const Formulario = (props) => {

    const itens = [
        'Top lane',
        'Mid lane',
        'bot lane',
        'jg'
    ]

    
    const [nome, setNome] = useState('') //useState seria um wook (gancho) que pega 1 valor e me entrega 2 valores o valor (nome) e o setValor (setNome) o valor seria algo ja predefinido e o serValor seria aquilo que altera// 
    const [função, setFunção] = useState('')
    const [imagem, setimagem] = useState('')
    const [posição, setPosição] = useState('')

    const aoSalvar = (evento) => { // esse parametro evento e do js, o evento do onsubmit que seria o acionamento do botão// 
        evento.preventDefault() //essa função ela remove o comportamento padrão, porque o comportamento padrão seria recarregar a pagina mas a gnt n quer isso//
        props.aoCampeaoCadastrado({ //sempre quando tiver um submit ele vai acionar o props.aoCampeaoCadastrado que e aquela funçao que eu botei no app.jsx dentro do formulario e ta ligada a funçao do app.jsx, e ele vai chamar o nome,funçao,imagem,posiço, que ta vindo dos inputs// 
            nome,
            função,
            imagem,
            posição
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}> 
            <h2>Prencha os dados para criar o card do seu campão</h2>
            <CampoTexto
                obrigatorio={true}
                label='Nome do campeão'
                placeholder='Digite o nome do seu campão'
                valor={nome}
                aoAlterado={valor => setNome(valor)}
            />  
            <CampoTexto 
                obrigatorio={true} 
                label='Função' 
                placeholder='Digite a função do seu campão'
                valor={função}
                aoAlterado={valor => setFunção(valor)} 
            />    
            <CampoTexto 
                label='imagem'  
                placeholder='Informe o endereço da imagem'
                valor={imagem}  
                aoAlterado={valor => setimagem(valor)}
            />              
            <ListaSuspensa
                 obrigatorio={true}
                 label='Posição'
                 itens={itens} 
                 valor={posição}
                 aoAlterado={valor => setPosição(valor)}
            />
            <Botao>
                Criar card
            </Botao>
            </form> 
        </section> 
        //definimos em cada um que o valor vai ser predefinido, e o aoAlterado que seria os novos valores vai ser igual a valor function ai setNome que a lista que altera(valor)
        //ali nos 2 primeiros e ultimo campotexto eu coloquei que obrigatorio um parametro qualquer e igual ao valor true, e la no campotexto.jsx e listasuspensa.jsx eu falei que required e igual a esse parametro,ou seja de forma simplificada required = true tornando required on de forma que ele junte os mundos html5 com o react, isso para os campos que eu botei obrigatorio serem obrigatorios a ser prenchidos// 
        //onSubmit seria quando o formulario for enviado seja por um botão ou tecla, falamamos que quando o formulario foi enviado ele vai acionar a função aoSalvar// 
        // aqui colocamos o texto do corpo do botao, fazendo o texto se tornar filho do botão// 
        // aqui dentro do form chamamos a lista suspensa, demos um label a ela, e demos um props a ela chamado itens que e igual a const itens, costante essa q e uma lista com os nomes predefinodos do que eu quero q apareça no select// 
        // aqui criamos parametros, agora ele esta mandando essas informaçãos que colocamos entre aspas la pra função campo texto// 
    )
}
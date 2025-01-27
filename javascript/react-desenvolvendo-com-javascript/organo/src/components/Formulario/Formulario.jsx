import  Botao  from '../Botao'
import CampoTexto from '../CampoTexto' //criamos um arquivo chamado index.jsx e la exportamos e importamos oque a gente quiser, esse metodo e parecido com o do banner de so renomear o arquivo para index.jsx mas aqui o nosso arquivo principal continua com o nome desejado e a gente escolhe oque quer importar, a partir de agora vou usar esse jeito// 
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

export const Formulario = () => {

    const itens = [
        'Top lane',
        'Mid lane',
        'bot lane',
        'jg'
    ]

    const aoSalvar = (evento) => { // esse parametro evento e do js, o evento do onsubmit que seria o acionamento do botão// 
        evento.preventDefault() //essa função ela remove o comportamento padrão, porque o comportamento padrão seria recarregar a pagina mas a gnt n quer isso//
        console.log('O form foi submetido')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}> 
            <h2>Prencha os dados para criar o card do seu campão</h2>
            <CampoTexto obrigatorio={true} label='Nome do campeão' placeholder='Digite o nome do seu campão'/>  
            <CampoTexto obrigatorio={true} label='Função'  placeholder='Digite a função do seu campão'/>
            <CampoTexto label='imagem'  placeholder='Informe o endereço da imagem'/>
            <ListaSuspensa obrigatorio={true} label='Posição' itens={itens} />
            <Botao>
                Criar card
            </Botao>
            </form> 
        </section> 
        //ali nos 2 primeiros e ultimo campotexto eu coloquei que obrigatorio um parametro qualquer e igual ao valor true, e la no campotexto.jsx e listasuspensa.jsx eu falei que required e igual a esse parametro, isso para os campos que eu botei obrigatorio serem obrigatorios a ser prenchidos// 
        //onSubmit seria quando o formulario for enviado seja por um botão ou tecla, falamamos que quando o formulario foi enviado ele vai acionar a função aoSalvar// 
        // aqui colocamos o texto do corpo do botao, fazendo o texto se tornar filho do botão// 
        // aqui dentro do form chamamos a lista suspensa, demos um label a ela, e demos um props a ela chamado itens que e igual a const itens, costante essa q e uma lista com os nomes predefinodos do que eu quero q apareça no select// 
        // aqui criamos parametros, agora ele esta mandando essas informaçãos que colocamos entre aspas la pra função campo texto// 
    )
}
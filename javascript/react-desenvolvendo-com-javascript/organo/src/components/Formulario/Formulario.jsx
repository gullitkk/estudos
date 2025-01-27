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

    return (
        <section className='formulario'>
            <form>
            <h2>Prencha os dados para criar o card do seu campão</h2>
            <CampoTexto label='Nome do campeão' placeholder='Digite o nome do seu campão'/>  
            <CampoTexto label='Função'  placeholder='Digite a função do seu campão'/>
            <CampoTexto label='imagem'  placeholder='Informe o endereço da imagem'/>
            <ListaSuspensa label='Posição' itens={itens} />
            </form> 
        </section> 
        // aqui dentro do form chamamos a lista suspensa, demos um label a ela, e demos um props a ela chamado itens que e igual a const itens, costante essa q e uma lista com os nomes predefinodos do que eu quero q apareça no select// 
        // aqui criamos parametros, agora ele esta mandando essas informaçãos que colocamos entre aspas la pra função campo texto// 
    )
}
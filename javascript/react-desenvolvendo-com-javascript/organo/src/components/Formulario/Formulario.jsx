import CampoTexto from '../CampoTexto' //criamos um arquivo chamado index.jsx e la exportamos e importamos oque a gente quiser, esse metodo e parecido com o do banner de so renomear o arquivo para index.jsx mas aqui o nosso arquivo principal continua com o nome desejado e a gente escolhe oque quer importar, a partir de agora vou usar esse jeito// 
import './Formulario.css'

export const Formulario = () => {
    return (
        <section>
            <form>
            <CampoTexto label='Nome do campeão' placeholder='Digite o nome do seu campão'/>  
            <CampoTexto label='Função'  placeholder='Digite a função do seu campão'/>
            <CampoTexto label='imagem'  placeholder='Informe o endereço da imagem'/>
            </form>
        </section> // aqui criamos parametros, agora ele esta mandando essas informaçãos que colocamos entre aspas la pra função campo texto// 
    )
}
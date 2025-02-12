import './Posicao.css'
import Campeao from '../Campeao'

export const Posicao = (props) => {
    return (
        props.campeao.length > 0 &&
        <section className='Time' style={{ backgroundColor: props.corSecundaria }}> 
            <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
            <section className='campeao'>
                {props.campeao.map( campeao => {
                    return <Campeao corFundo={props.corPrimaria} aoDeletar={props.aoDeletar} nome={campeao.nome} key={campeao.nome}função={campeao.função} imagem={campeao.imagem}/> 
                })}   
            </section>
        </section>
        // depois da arrow function colamos uma chaves para criar um bloco e colocamos um return + o code orignal, pois antes sem as chaves ele ja renderizava tudo automatico mas com as chaves ele precisa de um retorn pra renderizar// 
        //aquele props.campeao.length > 0 && seria se a quantidade de campeao ou seja da lista vou maior que zero ele retorna a função que aciona o campo bot lane, etc. se n ele n aciona, posso usar esse metodo ou o da virgula// 
    ) // precisamos alterar a cor do fundo e da letra usando props como o css n aceita props, usamos o css inlinem dentro do lugar que vc quer aplicar abr um style dentro do style abra uma segunda chaves ai altere// 
}
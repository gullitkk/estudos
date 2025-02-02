import './Posicao.css'
import Campeao from '../Campeao'

export const Posicao = (props) => {
    return (
        props.campeao.length > 0 &&
        <section className='Time' style={{ backgroundColor: props.corSecundaria }}> 
            <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
            <section className='campeao'>
                {props.campeao.map( campeao => <Campeao corFundo={props.corPrimaria} nome={campeao.nome} key={campeao.nome} função={campeao.função} imagem={campeao.imagem}/> )}   
            </section>
        </section>
        //aquele props.campeao.length > 0 && seria se a quantidade de campeao ou seja da lista vou maior que zero ele retorna a função que aciona o campo bot lane, etc. se n ele n aciona, posso usar esse metodo ou o da virgula// 
    ) // precisamos alterar a cor do fundo e da letra usando props como o css n aceita props, usamos o css inlinem dentro do lugar que vc quer aplicar abr um style dentro do style abra uma segunda chaves ai altere// 
}
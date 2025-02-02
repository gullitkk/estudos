import './Posicao.css'
import Campeao from '../Campeao'

export const Posicao = (props) => {
    return (
        <section className='Time' style={{ backgroundColor: props.corSecundaria }}> 
            <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
            <section className='campeao'>
                {props.campeao.map( campeao => <Campeao nome={campeao.nome}  função={campeao.função} imagem={campeao.imagem}/> )}   
            </section>
            
        </section>
    ) // precisamos alterar a cor do fundo e da letra usando props como o css n aceita props, usamos o css inlinem dentro do lugar que vc quer aplicar abr um style dentro do style abra uma segunda chaves ai altere// 
}
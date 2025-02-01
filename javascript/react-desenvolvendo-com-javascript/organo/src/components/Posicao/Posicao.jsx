import './Posicao.css'

export const Posicao = (props) => {
    return (
        <section className='Time' style={{backgroundColor: props.corSecundaria}}>
            <h3>{props.nome}</h3>
        </section>
    )
}
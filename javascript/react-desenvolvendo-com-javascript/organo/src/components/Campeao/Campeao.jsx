import './Campeao.css'

export const Colaborador = (props) => {
    return (
    <div className='colaborador'>
        <div className='cabecalho'>
            <img src={props.imagem} alt={props.nome}/>
        </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.posicao}</h5>
            </div>
    </div>
    )
}  
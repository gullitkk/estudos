import { IoMdCloseCircle } from "react-icons/io";
import './Campeao.css'

export const Campeao = (props) => {
    return (
    <div className='colaborador'>
        <IoMdCloseCircle size={25} className='deletar' onClick={props.aoDeletar} /> 
        <div className='cabecalho' style={{backgroundColor: props.corFundo}}>
            <img src={props.imagem}alt={props.nome}/>
        </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.função}</h5>
            </div>
    </div>
    )
}  //esse Iomd e o icone, ele funciona como se fosse uma div, voce abre e fecha ele bota oque quiser dentro, o size e uma propriedade nova deles que permite aumentar o tamanho do icone/ /
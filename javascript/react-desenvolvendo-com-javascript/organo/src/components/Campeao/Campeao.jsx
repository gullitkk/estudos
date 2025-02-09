import { IoMdCloseCircle } from "react-icons/io";
import './Campeao.css'

export const Campeao = (props) => {
    return (
    <div className='colaborador'>
       <IoMdCloseCircle className='deletar' onClick={props.aoDeletar} /> 
        <div className='cabecalho' style={{backgroundColor: props.corFundo}}>
            <img src={props.imagem}alt={props.nome}/>
        </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.função}</h5>
            </div>
    </div>
    )
}  
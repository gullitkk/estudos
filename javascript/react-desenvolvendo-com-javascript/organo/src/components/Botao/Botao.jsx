import './Botao.css'

export const Botao = (props) => {
    return (
        <button className='botao'>
            {props.children}
        </button>
         // props.children e uma função que invez de chamar uma propriedade especifica ele chama tudo que esta dentro da função botao la no formulario .jsx, nesse caso podia usar o props.texto normal, mas caso o botão tivesse tipo uma imagem ai complicaria, o children chegou para ajudar// 
    )
}
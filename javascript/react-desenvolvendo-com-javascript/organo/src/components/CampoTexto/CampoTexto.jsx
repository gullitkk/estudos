import './CampoTexto.css'

export const CampoTexto = (props) => { // aqui criamos um parametro para receber aqueles que estamos mandando no app.jsx, o nome n importa mas na maioria das vezes usamos props// 

    let valor = ''

    const aoValor = (evento) => {
        valor = evento.target.value
        console.log(valor)
    }

    return ( // aqui colocamos props.label porque estamos chamano o parametro e especificando o caminho label, tem que colocal entre chaves se não ele entende como texto, o mesmo vale para o props.placeholder. // 
        <div className="campo-texto"> 
        
            <label>{props.label}</label> 
            <input onChange={aoValor} type="text" required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}
//aqui colocamos o export direto na function// 
//aqui a gente n usa o class para atribuir classes, usamos className // 
//essa estrutura faz a mesma coisa que a estrutura do banner, a diferença e que com arrow function o codigo fica menos verbalizado//  
//aqui criei uma cost chamada CampoTexto igualei ela a arrow function, o parantese e oque declara a função, seria equivalente a escrever function, caso queira colocar parametros coloque dentro dele, e a flecha e mais estrutura msm, as chaves e estrutura tbm// 

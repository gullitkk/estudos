import './CampoTexto.css'

export const CampoTexto = (props) => { // aqui criamos um parametro para receber aqueles que estamos mandando no app.jsx, o nome n importa mas na maioria das vezes usamos props// 

    //let valor = 'heitor'//

    const aoDigitado = (evento) => {

    }

    return ( // aqui colocamos props.label porque estamos chamano o parametro e especificando o caminho label, tem que colocal entre chaves se não ele entende como texto, o mesmo vale para o props.placeholder. // 
        <div className="campo-texto"> 
        
            <label>{props.label}</label> 
            <input value={valor} onChange={aoDigitado} type="text" required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}
//como definimos um value e falamos que o value e igual a valor e valor e igual a evento.target.value + o valor padrão que seria heitor , o react n renderiza e acaba ficando o valor la na campo texto sem ser alterado porque ele n sabe quando tem q renderizar o dom, ent ele so adiciona a primeira letra digitada ao valor e permanece com o nome heitor nos campos de texto, para mudar isso precisamos manipular o estado//
//onchange seria as mudanças feitas ou seja estou dizendo que as mudanças feitas vao ser iguais a aoValor, value estou definindo um valor padrão que seria heitor, la em cima falamos que a const aoValor e igual a uma arrow function onde valor vai ser igual a evento.target.value, evento seria um parametro do js que usamos para acessar os eventos que ocorre em algum lugar, target seria algo prenchido e value seria valor, ou seja estamos dizendo que valor e igual ao que for escrito// 
//aqui colocamos o export direto na function// 
//aqui a gente n usa o class para atribuir classes, usamos className // 
//essa estrutura faz a mesma coisa que a estrutura do banner, a diferença e que com arrow function o codigo fica menos verbalizado//  
//aqui criei uma cost chamada CampoTexto igualei ela a arrow function, o parantese e oque declara a função, seria equivalente a escrever function, caso queira colocar parametros coloque dentro dele, e a flecha e mais estrutura msm, as chaves e estrutura tbm// 

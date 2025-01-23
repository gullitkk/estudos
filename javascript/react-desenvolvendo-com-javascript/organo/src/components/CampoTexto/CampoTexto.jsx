const CampoTexto = () => {
    return (
        <div className="form_criar_card"> 
            <label>Nome</label>
            <input type="text" placeholder="Digite seu nome"/>
            <label>Cargo</label>
            <input type="text" placeholder="Digite seu cargo"/>
            <label>Imagem</label>
            <input type="text" placeholder="Informe o endereço da imagem" />
        </div>
    )
}

export default CampoTexto 
//aqui a gente n usa o class para atribuir classes, usamos className // 
//essa estrutura faz a mesma coisa que a estrutura do banner, a diferença e que com arrow function o codigo fica menos verbalizado//  
//aqui criei uma cost chamada CampoTexto igualei ela a arrow function, o parantese e oque declara a função, seria equivalente a escrever function, caso queira colocar parametros coloque dentro dele, e a flecha e mais estrutura msm, as chaves e estrutura tbm// 

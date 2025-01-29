import './ListaSuspensa.css'

export const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.obrigatorio} value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)}> 
                {props.itens.map(itens => {
                    return <option key={itens}>{itens}</option>
                }) }
            </select>
        </div>
    )
}
//o lista suspensa e uma lista generica, podemos usar para os times ou qualquer outra lista//
//o select e aquele campo de escolher dentro dele colocamos o props.itens que e um parametro que ta vindo do formulario.jsx e botamos o .map que e um recurso do react para listas, ele percorre a lista executa ela e criar novas opçãos a partir dela//
//criamos uma arrow function com o parametro itens, o parantese ebranje tudo para ter menos codigo, mas no fim e a mesma coisa, e essa function quando acionada retorna um valor do option, que seria o itens, a key e algo nessecaria do react, igualamos ela a itens pois cada time tem seu nome ou seja a key e o nome//
import './ListaSuspensa.css'

export const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(itens => {
                    return <option key={itens}>{itens}</option>
                }) }
            </select>
        </div>
    )
}
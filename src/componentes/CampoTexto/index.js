import './CampoTexto.css'

const CampoTexto = (props) => {

    const propsModificada = `${props.placeholder}...`


    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input 
                value={props.valor}
                onChange={aoDigitado}
                required={props.obrigatorio}
                placeholder={propsModificada}
            />
        </div>
    );
}

export default CampoTexto;
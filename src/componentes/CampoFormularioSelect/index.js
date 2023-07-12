export default function CampoFormularioSelect({tituloCampo, erro, className, register, opcoes}) {
    return(
        <div className="row mb-2">
            <label className="col-sm-2 col-form-label required">{tituloCampo}</label>
            <div className="col-sm-10 offset-sm-2">
                <select className={`form-select ${className}`} aria-label="Default select example" {...register}>
                    {opcoes.map(opcao => (
                        <option key={opcao.value} value={opcao.value}>{opcao.nome}</option>
                    ))}
                </select>
                {erro}
            </div>
        </div>               
    )
}

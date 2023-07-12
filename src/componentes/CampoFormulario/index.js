import "./CampoFormulario.css";

export default function CampoFormulario({tituloCampo, erro, type, className, register}) {
    return(
        <div className="row mb-2">
            <label className={`col-sm-2 col-form-label required`}>{tituloCampo}</label>
            <div className="col-sm-10">
                <input 
                    type={type} 
                    className={`form-control ${className}`}  
                    {...register} 
                    autoComplete="off"
                />
                {erro}
            </div>
        </div>               
    )
}
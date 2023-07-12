export default function CampoFormularioCheckbox({nomeCampo, className, value, register}) {
    return(
        <div className="form-check form-check-inline">
            <input 
                className={`form-check-input border-2 checkbox ${className}`}
                type="checkbox"    
                value={value}
                {...register}
            />
            <label className="form-check-label">{nomeCampo}</label>
        </div>
    )
}

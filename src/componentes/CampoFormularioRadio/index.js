
export default function AreaAtuacao ({ tituloCampo, register, nome, erro, options, className }) {
  return (
    <div className="row mb-2">
      <label className="col-sm-2 col-form-label required">{tituloCampo}</label>
      <div className="col-sm-10 offset-sm-2">
        {options.map((option) => (
          <div className="form-check" key={option}>
            <input
              value={option}
              className={`form-check-input border-2 ${className}`}
              type="radio"
              {...register(`${nome}`)}
            ></input>
            <label className="form-check-label"> {option} </label>
          </div>
        ))}
        {erro}
      </div>
    </div>
  );
};


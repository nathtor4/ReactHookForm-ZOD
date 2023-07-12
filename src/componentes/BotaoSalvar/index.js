import "./BotaoSalvar.css";

export default function BotaoSalvar ({ onClick }) {
  return (
    <div className="d-flex justify-content-md-end m-1">
      <button
        type="submit"
        className="btn btn-primary botao button-verificador"
        onClick={onClick}
      >
        Salvar
      </button>
    </div>
  );
};



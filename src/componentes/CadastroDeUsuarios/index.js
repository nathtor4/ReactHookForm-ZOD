import CampoFormulario from "componentes/CampoFormulario";
import CampoFormularioSelect from "componentes/CampoFormularioSelect";
import CampoFormularioCheckbox from "componentes/CampoFormularioCheckbox";
import CampoFormularioRadio from "componentes/CampoFormularioRadio";
import BotaoSalvar from "componentes/BotaoSalvar";
import "./CadastroDeUsuarios.css";

import {useForm} from "react-hook-form";
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import { toast } from "react-toastify";

export default function CadastroDeUsuarios() {

    const opcoesSexo = [
        {value: "F", nome: "Feminino"},
        {value: "M", nome: "Masculino"},
        {value: "I", nome: "Outro"},
    ];

    const opcoesInteresses = [
        {value: "TI", nome: "TI"},
        {value: "Saúde", nome: "Saúde"},
        {value: "Livros", nome: "Livros"},
        {value: "Outro", nome: "Outro"},
    ];

    const createUserFormSchema = z.object({
        nome: z.string()
            .nonempty("Campo obrigatório")
            .min(3, "Mínimo 3 caracteres"),
        login: z.string()
            .nonempty("Campo obrigatório")
            .min(6, "Mínimo 3 caracteres"),
        senha: z.string()
            .nonempty("Campo obrigatório")
            .min(6, "Mínimo 6 caracteres"),
        confirmarSenha: z.string()
            .nonempty("Campo obrigatório"),
        sexo: z.string()
            .nonempty("Campo obrigatório"),
        interesses: z.array(z.string())
            .nonempty("Selecione pelo menos uma opção"),
        area: z.string()
            .nonempty("Campo obrigatório"),
    }).refine((data) => data.senha === data.confirmarSenha, {message: 'As senhas não coincidem.', path: ['confirmarSenha']});
    

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: zodResolver(createUserFormSchema),
        defaultValues: {
            interesses: ['TI'],
            area: 'Backend'
        },
    });

    function createUser(data) {
        console.log(data);

        reset({
            nome: '',
            login:'',
            senha: '',
            confirmarSenha: '',
            sexo: '',
            interesses: [],
            area:''
        })

        toast.success("Cadastrado com sucesso!", 
                {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                }
        );
    }
    
    
    return(
        <div className= "d-flex justify-content-center">

            <form className="formulario" data-formulario onSubmit={handleSubmit(createUser)} >
                
                <CampoFormulario 
                    tituloCampo="Nome:"
                    erro = {errors?.nome && <p className="mensagem-erro">{errors?.nome?.message}</p>  }
                    type="text"
                    className={errors.nome ? "erro" : ""}
                    register={register("nome")}
                />    

                <CampoFormulario 
                    tituloCampo="Login:"
                    erro={errors?.login && <p className="mensagem-erro">{errors?.login?.message}</p>}
                    type="text"
                    className={errors.login ? "erro" : ""}
                    register={register("login")}
                />

                <CampoFormulario 
                    tituloCampo="Senha:"
                    erro = {errors?.senha && <p className="mensagem-erro">{errors?.senha?.message}</p>  }
                    type="password"
                    className={errors.senha ? "erro" : ""}
                    register={register("senha")}
                />        

                <CampoFormulario 
                    tituloCampo="Confirmar senha:"
                    erro = {errors?.confirmarSenha && <p className="mensagem-erro">{errors?.confirmarSenha?.message}</p>  }
                    type="password"
                    className={errors.confirmarSenha ? "erro" : ""}
                    register={register("confirmarSenha")}
                />

                <CampoFormularioSelect 
                    tituloCampo="Sexo:"
                    erro={errors?.sexo && <p className="mensagem-erro">{errors?.sexo?.message}</p>}
                    className={errors.sexo ? "erro" : ""}
                    register={register("sexo")}
                    opcoes={opcoesSexo}
                />

                <div className="row mb-2">
                    <label className="mb-2 required">Interesse(s): </label>
                    <div className="col-sm-10 offset-sm-2">
                        <div>
                            {opcoesInteresses.map(opcao => (
                                <CampoFormularioCheckbox 
                                    key={opcao.value}
                                    nomeCampo={opcao.nome}
                                    className={errors.interesses ? "erro" : ""}
                                    value={opcao.value}
                                    register={register("interesses")}
                                />
                            ))}
                            <div>
                                {errors?.interesses && <p className="mensagem-erro">{errors?.interesses?.message}</p>}
                            </div>
                        </div>
                    </div>
                </div>

                <CampoFormularioRadio
                    tituloCampo="Área de atuação:"
                    erro={errors?.area && <p className="mensagem-erro">{errors?.area?.message}</p>}
                    register={register}
                    nome="area"
                    className={errors.area ? 'erro' : ' '}
                    options={['Backend', 'Frontend']}
                />
                
                <BotaoSalvar />

            </form>                      
        </div>
    )
}

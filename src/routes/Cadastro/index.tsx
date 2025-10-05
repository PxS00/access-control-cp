import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { IUserFormValues } from "../../types/inputProps";
import Input from "../../components/Form/Input";

const API_URL = "http://localhost:3001/usuarios";

export default function Cadastro() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserFormValues>({
    mode: "onChange",
  });

  const onSubmit = handleSubmit(async (data: IUserFormValues) => {
    console.log("Dados enviados:", data);
  });

  return (
    <main>
      <div style={{ width: "40%", margin: "0 auto" }}>
        <h1>Cadastro de Usuário</h1>

        <form onSubmit={onSubmit}>
          <fieldset>
            <Input
              id="nome"
              name={"nome"}
              label="Nome"
              placeholder="Digite seu nome completo"
              register={register}
              error={errors.nome && "Campo obrigatório"}
            />

            <Input
              id="nomeUsuario"
              name={"nomeUsuario"}
              label="Nome de Usuário"
              placeholder="Digite seu nome de usuário"
              register={register}
              error={errors.nomeUsuario && "Campo obrigatório"}
            />

            <Input
              id="email"
              name={"email"}
              label="E-mail"
              placeholder="Digite seu e-mail"
              register={register}
              error={errors.email && "Campo obrigatório"}
            />

            <div>
              <button type="submit">Cadastrar</button>
            </div>
          </fieldset>
        </form>
      </div>
    </main>
  );
}

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { IUserFormValues } from "../../types/inputProps";

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
            <div>
              <button type="submit">Cadastrar</button>
            </div>
          </fieldset>
        </form>
      </div>
    </main>
  );
}

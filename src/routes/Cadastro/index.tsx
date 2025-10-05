import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Form/Button";
import Input from "../../components/Form/Input";
import { LayoutForm } from "../../components/Form/LayoutForm";
import { type CadastroSchema } from "../../types/schema";
const API_URL = import.meta.env.VITE_API_URL as string;

export default function Cadastro() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CadastroSchema>({
    mode: "onChange", 
  });

  const onSubmit = handleSubmit(async (data: CadastroSchema) => {
    try {
      const resposta = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!resposta.ok) {
        throw new Error("Erro ao salvar usuário");
      }

      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (e) {
      console.error("Erro:", e);
      alert("Erro ao salvar usuário.");
    }
  });
  return (
    <main>
      <div>
        <LayoutForm title="Cadastro de Usuário">
          <form onSubmit={onSubmit}>
            <Input
              id="nome"
              name="nome"
              label="Nome"
              placeholder="Digite seu nome completo"
              register={register}
              error={errors.nome?.message}
            />
            <Input
              id="nomeUsuario"
              name="nomeUsuario"
              label="Nome de Usuário"
              placeholder="Digite seu nome de usuário"
              register={register}
              error={errors.nomeUsuario?.message}
            />
            <Input
              id="email"
              name="email"
              label="E-mail"
              type="email"
              placeholder="Digite seu e-mail"
              register={register}
              error={errors.email?.message}
            />
            <Button
              type="submit"
              isLoading={isSubmitting}
              loadingText="Cadastrando..."
            >
              Cadastrar
            </Button>
          </form>
        </LayoutForm>
      </div>
    </main>
  );
}

import { useForm } from "react-hook-form";
import { LayoutForm } from "../../components/Form/LayoutForm";
import Input from "../../components/Form/Input";
import type { IUserFormValues } from "../../types/inputProps";
import { Button } from "../../components/Form/Button";

type LoginData = IUserFormValues & { senha: string }; // 👈 adiciona o campo senha

export default function Login() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<LoginData>();

  function onSubmit(data: LoginData) {
    console.log("Dados do login:", data);
  }

  return (
    <LayoutForm title="Login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="nomeUsuario"
          name="nomeUsuario"
          label="Nome de Usuário"
          placeholder="Digite seu nome de usuário"
          register={register as any}
        />

        <Input
          id="senha"
          name={"senha" as any}
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          register={register as any}
        />
        <Button type="submit" isLoading={isSubmitting} loadingText="Entrando...">
          Entrar
        </Button>
      
      </form>
    </LayoutForm>
  );
}

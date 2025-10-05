import { useForm } from "react-hook-form";
import { LayoutForm } from "../../components/Form/LayoutForm";
import Input from "../../components/Form/Input";
import type { IUserFormValues } from "../../types/inputProps";
import { Button } from "../../components/Form/Button";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<IUserFormValues>({ mode: "onBlur" });

  async function onSubmit(data: IUserFormValues) {
    try {
      const response = await fetch("/db.json");
      const jsonData = await response.json();
      const usuarios = jsonData.usuarios;

      const usuarioValido = usuarios.find(
        (u: IUserFormValues) =>
          u.nomeUsuario === data.nomeUsuario && u.email === data.email
      );

      if (!usuarioValido) {
        setError("email", {
          type: "manual",
          message: "Usuário ou e-mail inválido",
        });
        return;
      }

      alert(`Bem-vindo, ${usuarioValido.nome}!`);
      console.log("Login bem-sucedido:", usuarioValido);
    } catch (error) {
      console.error("Erro ao verificar login:", error);
      setError("email", {
        type: "manual",
        message: "Erro ao acessar os dados do servidor.",
      });
    }
  }


  return (
    <main
      className="
        bg-log-cad bg-cover bg-center bg-no-repeat
        min-h-dvh w-full relative
        flex items-center justify-center
        px-4 py-6
        sm:px-6 sm:py-8
        md:px-8 md:py-10
      "
    >
      <div className="container-login">
        <LayoutForm title="Login">
          <form onSubmit={handleSubmit(onSubmit)}>
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
              type="email"
              label="E-mail"
              placeholder="Digite seu e-mail"
              register={register}
              error={errors.email?.message}
            />

            <Button type="submit" isLoading={isSubmitting} loadingText="Entrando...">
              Entrar
            </Button>
          </form>
        </LayoutForm>
      </div>
    </main>

  );
}

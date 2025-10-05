import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import { LayoutForm } from '../../components/Form/LayoutForm';
import {
  loginSchema,
  type CadastroSchema,
  type LoginSchema,
} from '../../types/schema';

const API_URL = import.meta.env.VITE_API_URL as string;

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setError,
  } = useForm<LoginSchema>({
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginSchema) {
    try {
      const res = await fetch(API_URL);
      const usuarios: CadastroSchema[] = await res.json();
      const usuarioValido = usuarios.find(
        u => u.nomeUsuario === data.nomeUsuario && u.email === data.email
      );
      if (!usuarioValido) {
        setError('email', {
          type: 'manual',
          message: 'Usuário ou e-mail inválido',
        });
        return;
      }
      localStorage.setItem('usuarioLogado', JSON.stringify(usuarioValido));
      window.dispatchEvent(new Event('userChanged'));
      navigate('/home');
    } catch {
      setError('email', {
        type: 'manual',
        message: 'Erro ao acessar os dados do servidor.',
      });
    }
  }

  return (
    <main className="bg-log-cad page-login">
      <div className="container">
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
            <Button
              type="submit"
              isLoading={isSubmitting}
              disabled={!isValid || isSubmitting}
              loadingText="Entrando..."
            >
              Entrar
            </Button>
          </form>
          <div>
            <span>Não tem uma conta? </span>
            <Link to="/cadastro">Cadastre-se</Link>
          </div>
        </LayoutForm>
      </div>
    </main>
  );
}

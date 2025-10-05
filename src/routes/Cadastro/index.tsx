import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import { LayoutForm } from '../../components/Form/LayoutForm';
import { cadastroSchema, type CadastroSchema } from '../../types/schema';
const API_URL = import.meta.env.VITE_API_URL as string;

export default function Cadastro() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<CadastroSchema>({
    mode: 'onChange',
    defaultValues: { nome: '', nomeUsuario: '', email: '' },
    resolver: zodResolver(cadastroSchema),
  });

  const onSubmit = handleSubmit(async (data: CadastroSchema) => {
    try {
      const res = await fetch(API_URL);
      const usuarios = await res.json();
      const nomeUsuarioExistente = usuarios.find(
        (u: CadastroSchema) => u.nomeUsuario === data.nomeUsuario
      );
      const emailExistente = usuarios.find(
        (u: CadastroSchema) => u.email === data.email
      );
      if (nomeUsuarioExistente) {
        setError('nomeUsuario', {
          type: 'manual',
          message: 'Nome de usuário já cadastrado.',
        });
        return;
      }
      if (emailExistente) {
        setError('email', { type: 'manual', message: 'E-mail já cadastrado.' });
        return;
      }

      const resposta = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!resposta.ok) throw new Error('Erro ao salvar usuário');
      reset();
      window.dispatchEvent(new Event('userChanged'));
      navigate('/');
    } catch {
      setError('email', { type: 'manual', message: 'Erro ao salvar usuário.' });
    }
  });

  return (
    <main className="bg-log-cad page-login">
      <div className="container">
        <LayoutForm title="Cadastro">
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

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";
import type { CadastroSchema } from '../../types/schema';

export default function Header() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState<CadastroSchema | null>(null);

  function logout() {
    localStorage.removeItem('usuarioLogado');
    window.dispatchEvent(new Event('userChanged'));
    navigate('/');
  }

  useEffect(() => {
    const getUsuario = () => {
      try {
        return JSON.parse(localStorage.getItem('usuarioLogado') || 'null');
      } catch {
        return null;
      }
    };

    setUsuario(getUsuario());

    const handleUserChange = () => {
      setUsuario(getUsuario());
    };

    window.addEventListener('userChanged', handleUserChange);
    return () => {
      window.removeEventListener('userChanged', handleUserChange);
    };
  }, []);

  type UsuarioAlternativo = { nomeUsuario?: string };

  const iniciais = usuario
    ? (usuario.nome || (usuario as UsuarioAlternativo).nomeUsuario || "")
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map(p => p[0]?.toUpperCase() || "")
        .join("")
    : "";

  return (
    <header className="app-header" role="banner">
      <div className="header-wrap">
        <h1 className="header-title">Bem-Vindo ao Sistema de Controle de Acesso</h1>

        {usuario && (
          <div className="header-user" aria-label="Usuário logado">
            <div className="header-avatar" aria-hidden>
              {iniciais || ((usuario as { nomeUsuario?: string }).nomeUsuario)?.[0] || "U"}
            </div>

            <div className="header-info">
              <p className="header-greet">
                <strong className="header-name">
                  {usuario.nome || (usuario as { nomeUsuario?: string }).nomeUsuario}
                </strong>
              </p>
              <p className="header-mail">{usuario.email}</p>
            </div>

            <nav className="header-actions" aria-label="Ações do usuário">
              <button type="button" onClick={logout} className="btn btn-primary" title="Sair">
                <IoIosLogOut className="inline-block mr-1 -mt-0.5" aria-hidden />
                Sair
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

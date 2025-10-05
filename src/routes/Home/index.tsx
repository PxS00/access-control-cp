import { FaHandSpock } from "react-icons/fa6";

export default function Home() {
  const usuario = JSON.parse(localStorage.getItem('usuarioLogado') || 'null');

  return (
    <div>
      <h1>Home</h1>
      {usuario && (
        <div>
          <p>
            Bem-vindo, <b>{usuario.nomeUsuario} <FaHandSpock /></b>!
          </p>
        </div>
      )}
    </div>
  );
}

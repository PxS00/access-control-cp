export default function Home() {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado") || "null");

  return (
    <div>
      <h1>Home</h1>
      {usuario && (
        <div>
          <p>
            Bem-vindo, <b>{usuario.nomeUsuario}</b>!
          </p>
        </div>
      )}
    </div>
  );
}

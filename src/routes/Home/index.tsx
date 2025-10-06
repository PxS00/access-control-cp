import { FaHandSpock } from "react-icons/fa6";

function getSaudacao() {
  const h = new Date().getHours();
  if (h < 12) return "Bom dia";
  if (h < 18) return "Boa tarde";
  return "Boa noite";
}

export default function Home() {
  const usuario = (() => {
    try {
      return JSON.parse(localStorage.getItem("usuarioLogado") || "null");
    } catch {
      return null;
    }
  })();

  const saudacao = getSaudacao();

  return (
    <main className="page-home">
      <section className="home-wrap">
        <h1 className="home-title">Home</h1>

        {usuario ? (
          <>
            <div className="home-card">
              <div className="home-icon" aria-hidden>
                <FaHandSpock className="size-7" />
              </div>
              <p className="home-text">
                {saudacao},{" "}
                <b className="home-username">
                  {usuario.nomeUsuario || usuario.nome}
                </b>
                ! Seja bem-vindo.
              </p>
            </div>

            <div className="home-grid">
              <a href="/cadastro" className="home-tile">
                <div className="home-tile-title">Cadastrar usuários</div>
                <div className="home-tile-desc">Crie novos acessos rapidamente</div>
              </a>
            </div>
          </>
        ) : (
          <p className="mt-6 text-slate-600">Você ainda não está logado.</p>
        )}
      </section>
    </main>
  );
}

import ProjetosHome from './projetosHome.js';

function Home() {
  return (
    <main>
      <section id="home">
        <p>Upgrades</p>
      </section>

      <section>
        <h1>Projetos</h1>
        <ProjetosHome />
      </section>

      <section>
        <h1>Serviços</h1>
      </section>

      <section>
        <h1>Contato</h1>
      </section>
    </main>
  );
}

export default Home;

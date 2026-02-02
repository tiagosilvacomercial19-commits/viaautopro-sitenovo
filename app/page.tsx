export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>O Portal Inteligente do Mercado Automotivo</h1>
        <p>Conectamos vendedores, lojistas e oportunidades reais de negócio.</p>
        <a href="/login" className="btn">Acessar Plataforma</a>
      </section>

      <section className="section">
        <h2>Para quem é o ViaAuto Pro?</h2>

        <div className="cards">
          <div className="card">
            <h3>Vendedores</h3>
            <p>Cadastre veículos e gere oportunidades reais.</p>
          </div>

          <div className="card">
            <h3>Lojistas</h3>
            <p>Acesse um catálogo filtrado e leads qualificados.</p>
          </div>

          <div className="card">
            <h3>Investidores</h3>
            <p>Modelo escalável com receita recorrente.</p>
          </div>
        </div>
      </section>
    </>
  );
}
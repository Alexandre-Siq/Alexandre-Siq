function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <span className="eyebrow">Agendamento clínico</span>
      <h1 id="hero-title">Sua agenda médica organizada. Marcações automatizadas via chatbot.</h1>
      <p className="hero-copy">
        MedAgenda conecta médicos e pacientes em uma única plataforma. O médico gerencia sua
        disponibilidade; o paciente marca consulta conversando com um assistente.
      </p>

      <div className="hero-actions">
        <a className="primary-cta" href="#painel-medico">
          Sou médico - Acessar painel
          <span aria-hidden="true">-&gt;</span>
        </a>
        <a className="secondary-cta" href="#marcar-consulta">
          Sou paciente - Marcar consulta
        </a>
      </div>
    </section>
  );
}

export default HeroSection;

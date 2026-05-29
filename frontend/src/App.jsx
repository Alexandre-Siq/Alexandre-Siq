import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import FeatureCard from './components/FeatureCard.jsx';

const features = [
  {
    icon: 'calendar',
    title: 'Gestão de agenda',
    description:
      'Crie blocos de disponibilidade, defina duração de consulta e bloqueie horários quando necessário.',
  },
  {
    icon: 'chat',
    title: 'Chatbot de marcação',
    description:
      'Pacientes conversam com um assistente guiado por estados para escolher especialidade, médico e data.',
  },
  {
    icon: 'stethoscope',
    title: 'Painel do médico',
    description:
      'Visualize consultas do dia, próximos atendimentos e histórico de pacientes em uma interface limpa.',
  },
];

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <HeroSection />
        <section className="features" aria-label="Recursos principais do MedAgenda">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;

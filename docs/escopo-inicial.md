# MedAgenda - Escopo inicial

## Entendimento do projeto

O MedAgenda será desenvolvido como uma aplicação monolítica cliente-servidor, adequada para um TCC de ADS:

- Backend em Java com Spring Boot, API REST, Spring Security, JWT, JPA/Hibernate e PostgreSQL.
- Frontend do painel em React com Vite.
- Chatbot do paciente no frontend, sem IA generativa, usando fluxo guiado por estados.
- Banco relacional responsavel por impedir conflito de horários no agendamento.

## Identidade visual

A interface inicial segue a referência de `image_0.png`:

- fundo branco puro `#FFFFFF`;
- destaque teal `#009E96`;
- texto principal preto `#111111`;
- texto secundário cinza medio `#555555`;
- layout minimalista com header compacto, hero centralizado, botoes arredondados e cards com borda leve;
- ícones lineares em teal, sem elementos decorativos excessivos.

## Estrutura backend sugerida

```text
backend/
  pom.xml
  src/main/java/br/com/medagenda/
    MedAgendaApplication.java
    controller/
    service/
    repository/
    entity/
    security/
  src/main/resources/
    application.yml
```

## Estrutura frontend sugerida

```text
frontend/
  index.html
  package.json
  vite.config.js
  src/
    main.jsx
    App.jsx
    styles.css
    components/
      Header.jsx
      HeroSection.jsx
      FeatureCard.jsx
    assets/
```

## Próximos passos após aprovação

1. Criar as Entidades JPA conforme a modelagem: usuarios, medicos, pacientes, agenda_medica e agendamentos.
2. Definir constraints de concorrencia no banco para impedir dois agendamentos no mesmo horario.
3. Implementar DTOs, repositories e services com regras de negocio.
4. Configurar Spring Security com JWT e perfis de acesso.

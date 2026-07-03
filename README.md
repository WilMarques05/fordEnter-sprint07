# Ford < Enter > - Sprint 07: Angular / TypeScript / Bootstrap / Integração com API

Este repositório foi desenvolvido como parte da Sprint 07 do curso de Front-End do programa Ford < Enter >, uma iniciativa realizada em parceria entre a Ford e o SENAI/CIMATEC.

🎯 Objetivo do Projeto

O foco principal desta etapa foi o desenvolvimento de uma aplicação web SPA (Single Page Application) robusta utilizando o framework Angular. O objetivo foi consolidar na prática a arquitetura de componentes reutilizáveis, rotas internas protegidas, design responsivo avançado e, fundamentalmente, a **integração e comunicação com uma API REST externa** para capturar e gerenciar dinamicamente os dados de autenticação de usuários e telemetria de veículos.

Nota: O projeto contido neste repositório foi criado exclusivamente para fins didáticos, não representando um projeto de software final ou de produção.

🛠️ Tecnologias e Ferramentas Exploradas

* **Angular CLI & Componentes:** Criação de arquitetura modularizada, separando as responsabilidades entre páginas principais (Dashboard, Login, Home) e subcomponentes reutilizáveis (Cards de indicadores).
* **Consumo de APIs REST:** Implementação de requisições HTTP para comunicação com o backend, realizando a captura reativa de dados de login e telemetria automotiva.
* **TypeScript:** Uso de tipagem estática e manipulação dinâmica de objetos para refletir dados recebidos da API em tempo real (volumetria de vendas, odômetro, VIN, nível de combustível).
* **Bootstrap 5:** Estruturação de layouts baseados em Grid System (Row/Col) e componentes nativos de utilitários de espaçamento e flexibilidade.
* **Angular Router:** Gerenciamento de ciclo de vida de rotas e navegação sem recarregamento de página via `routerLink` e `router-outlet`.
* **Git & GitHub:** Versionamento contínuo mantendo boas práticas de commit para isolamento de novas features de layout.

📝 O que foi praticado

Durante esta sprint, foram exercitados conceitos fundamentais como:

* **Integração com API & Fluxo de Autenticação:** Desenvolvimento da lógica de comunicação com o servidor para validação de credenciais de login. O formulário captura os dados reativos, dispara a requisição e gerencia os estados de resposta, exibindo feedbacks visuais de erro ou direcionando o usuário autenticado para as rotas internas.
* 
* **Consumo de Dados Dinâmicos na Dashboard:** Captura de dados de telemetria veicular via API. A seleção de um veículo específico (como a Ranger) no componente pai dispara atualizações assíncronas que preenchem instantaneamente tabelas e gráficos informativos.
* 
* **Componentização Avançada & Comunicação Dinâmica:** Criação do componente reutilizável `app-card` que recebe dados via propriedades de entrada do pai (`@Input`), permitindo que a resposta da API atualize múltiplos cards (Vendas, Conectados, Atualizações) sem acoplamento de código.
* 
* **Exibição Condicional e Estados de Loader:** Uso de diretivas de controle de fluxo do Angular (`@if`/`@else`) conectadas ao ciclo de vida das requisições HTTP, exibindo spinners de carregamento inteligentes enquanto os dados da API não são completamente renderizados na tela.
* 
* **Encapsulamento de Estilos (View Encapsulation & `:host`):** Resolução de conflitos de escopo de layout no Angular, utilizando seletores específicos de host para forçar a responsividade e preenchimento de componentes customizados dentro do grid nativo do Bootstrap.
* 
* **UI/UX e Técnicas Visuais Modernas:** Construção de uma interface de autenticação premium utilizando técnicas avançadas de CSS como *Glassmorphism* (`backdrop-filter: blur()`) integrado com fundos responsivos (`background-size: cover`), garantindo legibilidade máxima de textos e inputs posicionados sobrepostos à identidade visual corporativa da Ford.
* 
* **Navegação Responsiva Dinâmica (Sidebar Offcanvas):** Integração de uma sidebar fixa no desktop (`min-width: 768px`) que se transforma automaticamente em um menu oculto no mobile controlado por botão hambúrguer através do utilitário `offcanvas-md` do Bootstrap, adaptando o palco de conteúdo (`#main-content`) de maneira fluida.

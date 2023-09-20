<!-- Título do Projeto -->

<h1  align="center">Flame and Feast Scheduler 🔥🍖</h1>

<!-- Descrição do Projeto -->

<p  align="center">Um agendador de churrascos para facilitar o planejamento e a organização de eventos e contribuições. Essa é para a galera da Trinca que gosta de fazer churrascos sem justificativas, em dias aleatórios.</p>

<!-- Badges -->

<div align="center">  <img src="https://img.shields.io/github/license/kumanaya/flame-and-feast-scheduler" alt="Licença"> <img src="https://img.shields.io/github/v/release/kumanaya/flame-and-feast-scheduler" alt="Versão"> <img src="https://img.shields.io/github/issues/kumanaya/flame-and-feast-scheduler" alt="Issues"> <img src="https://img.shields.io/github/forks/kumanaya/flame-and-feast-scheduler" alt="Forks"> <img src="https://img.shields.io/github/stars/kumanaya/flame-and-feast-scheduler" alt="Stars"> </div>

<!-- Índice -->

## Índice

- [Funcionalidades](#funcionalidades)

- [Tecnologias e Bibliotecas Principais](#tecnologias-e-bibliotecas-principais)

- [Pré-requisitos](#pré-requisitos)

- [Instalação](#instalação)

- [Como Executar](#como-executar)

- [Testes Automatizados](#testes-automatizados)

- [Problemas Conhecidos](#problemas-conhecidos)

- [Design no Figma](#design-no-figma)

- [Interface do Projeto](#interface-do-projeto)

- [Contribuindo](#contribuindo)

- [Licença](#licença)

<!-- Funcionalidades -->

## Funcionalidades

- **Incluir um novo churrasco:** Você pode adicionar churrascos com data, descrição e observações adicionais para manter um registro organizado de todos os eventos.

- **Adicionar e remover participantes:** O aplicativo permite adicionar e remover participantes, além de registrar o valor de contribuição de cada um. Isso ajuda a manter o controle de quem está participando do churrasco.

- **Valor sugerido por usuário:** É possível escolher um valor sugerido por usuário, com e sem bebida inclusa. Isso ajuda a calcular o custo total do churrasco de acordo com as preferências de cada participante.

- **Visualizar detalhes:** Você pode visualizar os detalhes de cada churrasco, incluindo o total de participantes e o valor arrecadado até o momento. Isso facilita o planejamento e a organização do evento.

<!-- Tecnologias e Bibliotecas Principais -->

## Tecnologias e Bibliotecas Principais

Aqui estão algumas das principais tecnologias e bibliotecas utilizadas no projeto:

- **Next.js:** O projeto é construído com o Next.js, um framework React que facilita o desenvolvimento de aplicativos web modernos, oferecendo recursos como renderização do lado do servidor, otimização de desempenho e roteamento.

- **React com HookForm:** O projeto utiliza React com a biblioteca HookForm para gerenciar e validar formulários de maneira eficiente.

- **TypeScript:** O TypeScript é a linguagem de programação utilizada no projeto, fornecendo tipagem estática para melhorar a segurança e a manutenibilidade do código.

- **emoji-picker-react:** Essa biblioteca é usada para fornecer uma interface de seleção de emojis, tornando a comunicação mais divertida e expressiva nos churrascos agendados.

- **Joi:** Joi é uma biblioteca de validação de dados em JavaScript que auxilia na validação de entradas de usuário, garantindo que os dados sejam consistentes e seguros.

- **Tailwind CSS:** O projeto utiliza o Tailwind CSS para estilização responsiva e eficiente. Com ele, é possível criar interfaces atraentes e responsivas com facilidade.

- **Cypress:** Cypress é uma ferramenta de teste end-to-end que ajuda a garantir a qualidade e confiabilidade da aplicação, automatizando testes de usuário.

<!-- Pré-requisitos -->

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte software instalado em seu sistema:

- **Node.js:** Certifique-se de ter o Node.js instalado. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

- **Git:** Você também precisará do Git instalado em seu sistema para clonar o repositório. Você pode baixá-lo em [git-scm.com](https://git-scm.com/).

<!-- Instalação -->

## Instalação

1.  **Clone o repositório:**

```bash
git clone https://github.com/kumanaya/flame-and-feast-scheduler.git
```

2.  **Acesse a pasta do projeto:**

```bash
cd flame-and-feast-scheduler
```

3.  **Instale as dependências:**

```bash
npm install
```

<!-- Como Executar -->

## Como Executar

1.  **Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

Isso iniciará o servidor de desenvolvimento do Next.js. Você verá mensagens no terminal indicando que o servidor está em execução e ouvindo em uma porta, geralmente http://localhost:3000/.

2.  **Acesse o aplicativo:**

Abra seu navegador da web e acesse http://localhost:3000/ (ou a porta especificada no terminal). Você deve ver o seu aplicativo "Flame and Feast Scheduler" em funcionamento.

<!-- Testes Automatizados -->

## Testes Automatizados

Para executar testes automatizados usando o Cypress, siga estas etapas:

1.  **Inicie o servidor de desenvolvimento (se ainda não estiver em execução):**

```bash
npm run dev
```

2.  **Abra um novo terminal na pasta do projeto e execute o seguinte comando para iniciar o Cypress:**

```bash
npm run cypress:open
```

Isso abrirá a interface do Cypress, onde você pode selecionar e executar testes automatizados.

<!-- Interface do Projeto -->

## Interface do Projeto

![Home](https://github.com/kumanaya/flame-and-feast-scheduler/blob/main/assets/home.png)
![Add](https://github.com/kumanaya/flame-and-feast-scheduler/blob/main/assets/add.png)
![Event](https://github.com/kumanaya/flame-and-feast-scheduler/blob/main/assets/event.png)

<!-- Contribuindo -->

## Contribuindo

Você é bem-vindo(a) para contribuir com este projeto. Sinta-se à vontade para abrir problemas (issues) e enviar pull requests.

<!-- Licença -->

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

# 🚀 Portfólio Moderno - Rafael Augusto

Este é um portfólio de alto desempenho desenvolvido com as tecnologias mais recentes do ecossistema Web. O projeto apresenta uma interface dinâmica, interativa e totalmente responsiva, utilizando elementos 3D e animações avançadas.

🔗 **Link para o Deploy:** [https://rafaasj07.github.io/Portfolio/](https://rafaasj07.github.io/Portfolio/)

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando uma stack moderna focada em performance e experiência do usuário:

* **Framework:** Next.js 16.1 (com React 19).
* **Estilização:** Tailwind CSS 4.0.
* **Animações:** Motion (Framer Motion) e React Lottie.
* **3D & Gráficos:** Three.js, React Three Fiber e Drei para elementos visuais imersivos.
* **Linguagem:** TypeScript para tipagem estática e segurança do código.
* **Otimização:** React Compiler habilitado para melhor performance em tempo de execução.

---

## ✨ Funcionalidades

O portfólio está organizado em componentes modulares que oferecem uma navegação fluida:

* **Hero Section:** Introdução impactante com efeito de *Spotlight* e gerador de texto animado.
* **Bento Grid:** Layout moderno para exibir informações pessoais, stack tecnológica e integração com globo 3D interativo.
* **Showcase de Projetos:** Cards interativos com efeito *3D Pin* para visualização dos principais trabalhos.
* **Timeline de Trajetória:** Cronograma detalhado da formação acadêmica e experiência profissional.
* **Dark Mode:** Interface otimizada nativamente para o modo escuro usando `next-themes`.
* **Deploy Automatizado:** Configurado para exportação estática (`output: export`) e compatibilidade total com subdiretórios do GitHub Pages.

---

## 💻 Como Rodar Localmente

Para clonar e executar este projeto em sua máquina, você precisará do [Node.js](https://nodejs.org/) instalado.

1. **Clone o repositório:**
```bash
git clone https://github.com/Rafaasj07/Portfolio.git
cd Portfolio

```


2. **Instale as dependências:**
```bash
npm install

```


3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev

```


O site estará disponível em `http://localhost:3000`.
4. **Gerar Build para Produção:**
```bash
npm run build

```


Os arquivos estáticos serão gerados na pasta `out`.

---

## 📁 Estrutura de Pastas Principal

* `/app`: Contém o layout global e as rotas da aplicação (Next.js App Router).
* `/components`: Componentes reutilizáveis da interface, divididos entre seções e elementos de UI.
* `/data`: Centralização de todos os textos, links e caminhos de imagens do projeto, facilitando a manutenção.
* `/public`: Assets estáticos como ícones (SVG), imagens e animações JSON.
* `/lib`: Funções utilitárias, incluindo o helper para correção de caminhos em produção (`prefixPath`).

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo como inspiração ou base para o seu próprio portfólio.

Desenvolvido por **Rafael Augusto da Silva Januário**.
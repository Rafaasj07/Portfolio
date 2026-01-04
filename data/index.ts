export const navItems = [
  { name: "Sobre", link: "#sobre" },
  { name: "Projetos", link: "#projetos" },
  { name: "Experiência", link: "#experiencia" },
  { name: "Contato", link: "#contato" },
];

export const gridItems = [
  {
    id: 1,
    title: "Priorizo a colaboração com o cliente e comunicação aberta",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-top",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexível com fusos horários para comunicação global",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Minha Stack",
    description: "Web e IA",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Entusiasta de tecnologia apaixonado por lógica e desenvolvimento.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Sistema de categorização de documentos com IA",
    description: "Meu principal projeto",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Quer iniciar um projeto juntos?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Categorização de Documentos com IA",
    des: "Sistema inteligente para classificação automática de documentos usando processamento de linguagem natural e Docker.",
    img: "/Categorizar.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/node.svg", "/dock.svg"],
    link: "https://categorizador-frontend.onrender.com/categorizar",
  },
  {
    id: 2,
    title: "TopStream",
    des: "Plataforma para busca de filmes e animes com assistente de IA para recomendações personalizadas via IA.",
    img: "/TopStream.png",
    iconLists: ["/re.svg", "/node.svg", "/tail.svg", "/js.svg", "/ai.svg"],
    link: "https://topstream-finder-site.onrender.com",
  },
  {
    id: 3,
    title: "Sistema de Cadastro e Login",
    des: "Aplicação full-stack com gerenciamento de usuários, recuperação de senha e área administrativa com MongoDB e Prisma.",
    img: "/CadastroLogin.png",
    iconLists: ["/re.svg", "/node.svg", "/tail.svg", "/js.svg", "/mongo.svg"],
    link: "https://sistema-de-cadastro-e-login-web-commit.onrender.com",
  },
  {
    id: 4,
    title: "Assistente Culinário AI",
    des: "Chat interativo que fornece receitas detalhadas e sugestões baseadas em ingredientes disponíveis via IA.",
    img: "/DevReceita.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/ai.svg"],
    link: "https://meu-app-receitas.onrender.com",
  },
  {
    id: 5,
    title: "Landing Page - Maquiagem & Beleza",
    des: "Página web responsiva com animações de scroll modernas e menu interativo para serviços de estética.",
    img: "/Maquiagem.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/bootstrap.svg", "/jquery.svg"],
    link: "https://ephemeral-sunburst-d62836.netlify.app/",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Lead Frontend Developer",
    desc: "Liderança no desenvolvimento de interfaces modernas e manutenção de recursos focados no usuário.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 2,
    title: "Desenvolvedor de Soluções IA",
    desc: "Implementação de sistemas de categorização de documentos e integração de modelos inteligentes para classificação.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Desenvolvedor Full Stack Freelance",
    desc: "Desenvolvimento de aplicações ponta a ponta, desde o conceito inicial até o deploy final.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Desenvolvedor Mobile - React Native",
    desc: "Criação de aplicativos híbridos para iOS e Android com foco em performance e usabilidade.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Rafaasj07",
  },
  {
    id: 2,
    img: "/whatsapp.svg",
    link: "https://wa.me/5562985191711",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/rafaelasjdev",
  },
];

export const trajectory = [
  {
    id: 1,
    date: "2022 - 2024",
    title: "Técnico em Informática para Internet - IF Goiano",
    description: "Concluí o curso Técnico em Informática para Internet no Campus Trindade, com foco em Java, JavaScript, HTML, CSS e SQL.",
    link: null,
  },
  {
    id: 2,
    date: "2025 - Atualmente",
    title: "Bacharelado em Sistemas de Informação - UFG",
    description: "Consolidação da base em lógica de programação com C e aprofundamento em desenvolvimento web.",
    link: null,
  },
  {
    id: 3,
    date: "2025 - 2026",
    title: "Residência em TIC - Brisa/UFG & Go Ledger",
    description: "Atuação em projeto real, desenvolvendo um software web fullstack que ultiliza AI para categorizar/classificar documentos.",
    link: "https://github.com/Rafaasj07/Categorizar-Documentos-AI",
  },
  {
    id: 4,
    date: "2025 - Atualmente",
    title: "Desenvolvedor Frontend - Aplus Dicas",
    description: "Atuação no sistema APlus, uma plataforma de ensino e educação.",
    link: "https://aplusplatform.com/",
  },
];
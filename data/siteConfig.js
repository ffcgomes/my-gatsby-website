module.exports = {
  siteTitle: 'Olá, Sou Flávio Cardoso, Engenheiro e Cientista de Dados!',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Francisco Gomes',
  twitterUsername: '@ffcgomes',
  githubUsername: 'ffcgomes',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Engenheiro especializado em Ciência de Dados, apaixonado por programação de computador, 
  aplicando os conhecimentos de inferência estatística e ciência de dados na predição de preços de imóveis à 15 anos, 
  concluí a pós-graduação em ciência de dados em março de 2021. Entre os projetos desenvolvidos em ciência de dados, 
  estão Sistema de Recomendação, Processamento de Linguagem Natural, Predição de casos de dengue no Ceará, 
  Análise de Dados e Criação de Dashboards, Análise de Séries Temporais, Análise de Crédito, dentre outros. Atualmente utilizo as 
  seguintes ferramentas: <strong>Python, Linguagem R, Power BI, Spark, Pentaho, SQL, dentre outras.</strong>`,
  skills: [
    {
      name: 'Linguagem Python',
      level: 70
    },
    {
      name: 'Linguagem SQL',
      level: 60
    },
    {
      name: 'Linguagem R',
      level: 50
    },
    {
      name: 'Power BI',
      level: 40
    },
    {
      name: 'Spark',
      level: 60
    },
    {
      name: 'Pentaho',
      level: 70
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "Ativa Engenharia",
      begin: {
        month: 'Mar',
        year: '2021'
      },
      duration: null,
      occupation: "Cientista de Dados",
      description: "Utilizo modelos de Machine Learning para predição de preços de imóveis, cujos dados são coletados através de web-scrapping."
  
    },  {
      company: "Secrel",
      begin: {
        month: 'Dez',
        year: '2020'
      },
      duration: '8 meses',
      occupation: "Cientista de Dados",
      description: "Criação de um Sistema de Recomendação de produtos para o varejo físico a partir de dados de vendas."
  
    }, {
      company: "Avulso",
      begin: {
        month: 'jan',
        year: '2020'
      },
      duration: '1 ano',
      occupation: "Cientista de Dados Junior",
      description: "Previsão de casos de dengue no Estado do Ceará a partir de dados da Secretaria de Saúde e dados do IBGE."
    }, {
      company: "Uni7",
      begin: {
        month: 'set',
        year: '2019'
      },
      duration: '6 meses',
      occupation: "Estágio em Ciência de Dados",
      description: "Utilização de diversas ferramentas de ETL como Pentaho, Orange, Pandas e Numpy para Análise e Visualização de Dados ."
  
    },
  ],
  portifolio: [
    {
      image: "/images/gatsby-starter-cv.png",
      description: "Projetos em Ciência de Dados",
      url: "https://gatsbyflaviocvmaster.gatsbyjs.io/"
    },
    {
      image: "/images/awesome-grid.png",
      description: "Predição de Preço de Imóveis",
      url: "https://github.com/ffcgomes"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: "https://twitter.com/ffcgomes",
    linkedin: "https://www.linkedin.com/in/francisco-flavio-cardoso-gomes-5a295949/",
    github: "https://github.com/ffcgomes",
    email: "flaviocardoso@gmail.com"
  },
  siteUrl: 'https://gatsbyflaviocvmaster.gatsbyjs.io/',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    }
  ]
}
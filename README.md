# Página de Login - React

página de login moderna e responsiva desenvolvida com React para fins de estudo, explorei conceitos de componentes, estilização e responsividade.
![Image](https://github.com/user-attachments/assets/a5533fc3-c510-467c-bc4e-682369c77959)

## Funcionalidades

- **Formulário de Login**: Campos de usuário e senha com validação
- **Design Moderno**: Interface com degradê e cores personalizadas
- **Componentes Reutilizáveis**: InputField customizado com ícones
- **Responsividade**: Adaptação para diferentes tamanhos de tela
- **Estilização Avançada**: CSS com variáveis e media queries

## Tecnologias Utilizadas

- React 18
- Vite
- CSS3 (Flexbox, Grid, Media Queries)
- JavaScript ES6+

## Estrutura do Projeto

```
src/
├── components/
│   ├── InputField.jsx      # Componente de input reutilizável
│   └── InputField.css      # Estilos do input
├── pages/
│   └── LoginPage/
│       ├── LoginPage.jsx   # Página principal
│       └── LoginPage.css   # Estilos da página
├── assets/
│   ├── Icons/              # Ícones SVG
│   └── fundo.png          # Imagem de fundo
└── global.css             # Estilos globais e variáveis
```

## Componentes

### InputField
Componente reutilizável para campos de entrada com:
- Suporte a ícones
- Placeholder personalizado
- Validação de estado
- Estilização com degradê

### LoginPage
Página principal contendo:
- Imagem hero com texto sobreposto
- Formulário de login
- Seção Remember/Forgot Password
- Layout responsivo

## Responsividade

O projeto implementa breakpoints para:
- **Mobile** (≤480px): Layout compacto
- **Tablet** (481-1024px): Largura adaptativa
- **Desktop** (≥1025px): Largura fixa

## Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

3. Acesse `http://localhost:5173`

## Próximos Passos

- Melhorar código de responsividade 
- Implementar validação de formulário


## Aprendizados

Neste projeto pude explorar:
- Criação e reutilização de componentes React
- Gerenciamento de estado com useState
- Estilização CSS avançada com variáveis
- Implementação de responsividade
- Estruturação de projetos React

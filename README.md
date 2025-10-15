# 🛡️ LIG Security - Site Institucional

Um site institucional moderno e responsivo para empresa de segurança privada, desenvolvido com React, TypeScript e Vite.

## ✨ Características

- **🎨 Design Moderno**: Interface profissional com gradientes e animações
- **📱 Responsivo**: Otimizado para desktop, tablet e mobile
- **⚡ Performance**: Construído com Vite para desenvolvimento rápido
- **🔒 TypeScript**: Tipagem estática para maior segurança no código
- **🎭 Animações**: Transições suaves e efeitos visuais atrativos
- **♿ Acessibilidade**: Seguindo boas práticas de acessibilidade web

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool moderna e rápida
- **CSS3** - Estilos avançados com CSS Grid, Flexbox e CSS Variables
- **Font Awesome** - Ícones profissionais
- **Google Fonts** - Tipografia Inter

## 📦 Estrutura do Projeto

```
LIGSecurity/
├── .github/                 # Configurações do GitHub
│   └── copilot-instructions.md
├── .vscode/                 # Configurações do VS Code
│   └── tasks.json
├── public/                  # Arquivos estáticos
│   └── vite.svg
├── src/                     # Código fonte
│   ├── components/          # Componentes React
│   │   ├── Header.tsx       # Cabeçalho com navegação
│   │   ├── Header.css
│   │   ├── Hero.tsx         # Seção principal
│   │   ├── Hero.css
│   │   ├── About.tsx        # Seção sobre
│   │   └── About.css
│   ├── hooks/               # Hooks customizados
│   │   └── useAnimations.ts # Hooks para animações
│   ├── styles/              # Estilos globais
│   │   └── globals.css      # CSS global e variáveis
│   ├── utils/               # Utilitários
│   ├── App.tsx              # Componente principal
│   ├── App.css              # Estilos do App
│   └── main.tsx            # Ponto de entrada
├── index.html               # HTML principal
├── package.json             # Dependências
├── tsconfig.json           # Configuração TypeScript
├── vite.config.ts          # Configuração Vite
└── README.md               # Este arquivo
```

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para executar

1. **Clone ou baixe o projeto**
   ```bash
   # Se estiver usando Git
   git clone <url-do-repositorio>
   cd LIGSecurity
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Abra o navegador**
   - O site estará disponível em `http://localhost:3000`
   - Se a porta 3000 estiver ocupada, o Vite automaticamente usará a próxima disponível

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa verificação de código (se configurado)

## 🎨 Seções do Site

### 1. **Header (Cabeçalho)**
- Logo da empresa
- Navegação principal
- Botões de contato
- Menu mobile responsivo

### 2. **Hero (Seção Principal)**
- Apresentação da empresa
- Call-to-actions principais
- Estatísticas importantes
- Elementos visuais atrativos

### 3. **About (Sobre)**
- História da empresa
- Missão e valores
- Certificações
- Estatísticas detalhadas

## 🔧 Personalização

### Cores e Tema
As cores podem ser alteradas no arquivo `src/styles/globals.css`:

```css
:root {
  --primary-color: #1a1a2e;      /* Azul escuro principal */
  --accent-color: #e94560;       /* Vermelho de destaque */
  --gold-color: #f1c40f;         /* Dourado para elementos especiais */
  /* ... outras variáveis */
}
```

### Conteúdo
- **Textos**: Edite diretamente nos componentes em `src/components/`
- **Imagens**: Substitua os placeholders no diretório `public/`
- **Contatos**: Atualize números e e-mails nos componentes

### Novos Componentes
Para adicionar novas seções:

1. Crie o componente em `src/components/`
2. Crie o arquivo CSS correspondente
3. Importe e use no `App.tsx`

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile**: até 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## ♿ Acessibilidade

- Contraste adequado entre cores
- Navegação por teclado
- Textos alternativos
- Estrutura semântica HTML5
- Suporte a leitores de tela

## 🚀 Deploy

### Build de Produção
```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Opções de Deploy
- **Vercel**: Upload da pasta ou conecte o repositório
- **Netlify**: Arraste a pasta `dist` ou use Git
- **GitHub Pages**: Configure workflow automático
- **Servidor próprio**: Hospede os arquivos estáticos

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📞 Suporte

Para dúvidas ou suporte técnico:
- **Email**: contato@ligsecurity.com.br
- **Telefone**: (11) 99999-9999

## 📄 Licença

Este projeto é propriedade da LIG Security. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para a LIG Security**
# Vitrine de Medicamentos

## Descrição do Projeto
Este projeto é uma aplicação web chamada **Vitrine de Medicamentos**, que oferece uma interface amigável para cadastrar, listar, e gerenciar medicamentos. A aplicação possui funcionalidades como:

- **Cadastro de Medicamentos:** Página para adicionar medicamentos com validação em tempo real.
- **Header Personalizado e Responsivo:** Um cabeçalho customizado que se adapta a diferentes tamanhos de tela.
- **Listagem de Medicamentos Favoritos:** Uma seção dedicada para listar os medicamentos marcados como favoritos.
- **Carrinho de Compras:** Funcionalidade de carrinho de compras com exibição do valor total, opção de finalizar a compra e adicionar mais medicamentos ao carrinho.

## Funcionalidades Principais

### 1. Cadastro de Medicamentos
- Formulário para adicionar medicamentos com validação em tempo real, garantindo que os dados inseridos estão corretos antes de salvar.
- Os dados dos medicamentos cadastrados são salvos no **LocalStorage** do navegador, permitindo que sejam persistidos entre sessões.

### 2. Header Responsivo
- Um header personalizado e responsivo, que inclui navegação para diferentes seções da aplicação.
- O design do header adapta-se automaticamente a diferentes tamanhos de tela, proporcionando uma boa experiência tanto em dispositivos móveis quanto em desktops.

### 3. Listagem de Medicamentos Favoritos
- Opção de marcar medicamentos como favoritos.
- Medicamentos favoritos são exibidos em uma listagem separada para fácil acesso.

### 4. Carrinho de Compras
- Funcionalidade de adicionar medicamentos ao carrinho de compras.
- Exibição do valor total dos itens no carrinho.
- Opções para adicionar mais medicamentos ao carrinho ou finalizar a compra.

## Tecnologias Utilizadas
- **HTML5** para a estrutura da página.
- **CSS3** para o design responsivo e estilização.
- **JavaScript** para a lógica de negócio e manipulação do DOM.
- **LocalStorage** para armazenamento de dados no navegador.

## Como Executar o Projeto
1. Clone o repositório:
   ```bash
   git clone https://github.com/DEVinHouse-Clamed-V3/mini-projeto-avaliativo-team-react-native.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd mini-projeto-avaliativo-team-react-native
   ```
3. Abra o arquivo `index.html` em seu navegador.

## Estrutura do Projeto
```
vitrine-de-medicamentos/
│
├── index.html          # Página principal da aplicação
├── css/global.css      # Estilos CSS personalizados
├── js/cadastro.js      # Lógica de negócio e manipulação do DOM da pagina de cadastro de medicamentos
└── README.md           # Documentação do projeto
```

## Futuras Implementações
- **Integração com APIs externas:** Conectar a aplicação a uma API externa para buscar informações detalhadas sobre os medicamentos.
- **Autenticação de Usuários:** Implementar um sistema de login para que os usuários possam salvar suas listas de favoritos e carrinho em uma conta pessoal.
- **Sistema de Notificações:** Notificar os usuários sobre promoções ou quando um medicamento está em falta.
- **Filtros e Busca Avançada:** Adicionar opções para filtrar medicamentos por categoria, preço ou outras características.
- **Modo Escuro:** Implementar uma opção de modo escuro para uma melhor experiência visual em ambientes de pouca luz.
- **PWA (Progressive Web App):** Transformar a aplicação em uma PWA, permitindo que os usuários instalem a vitrine de medicamentos como um aplicativo no dispositivo.

## Contribuindo
Sinta-se à vontade para contribuir com o projeto. Para isso, siga os seguintes passos:

1. Faça um fork do projeto.
2. Crie uma branch para sua funcionalidade (`git checkout -b feature/nova-funcionalidade`).
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.

## Licença
Este projeto é licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Seja bem-vindo(a) ao **Vitrine de Medicamentos**! Explore as funcionalidades e fique à vontade para sugerir melhorias e novas ideias! 🚀
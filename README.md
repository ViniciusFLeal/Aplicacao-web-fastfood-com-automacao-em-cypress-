# Projeto Portfólio Pessoal - Fast-Food

Este projeto é uma aplicação web simples para simular o processo de pedido em um fast-food. Ele foi desenvolvido para fins de portfólio para a MENTORIA 2.0 ministrada por JULIO DE LIMA, utilizando HTML, CSS e JavaScript, e inclui automação de testes com Cypress.

## Funcionalidades
- Adição de produtos ao pedido, com quantidade inicial igual a 1
- Alteração da quantidade de cada produto
- Remoção de produtos do pedido
- Visualização do resumo do pedido (nome, quantidade, preço unitário)
- Exibição do valor total do pedido
- Mensagem de pedido vazio
- Confirmação do pedido, com mensagens dinâmicas de preparo e entrega
- Cancelamento do pedido
- Interface responsiva e moderna
- Testes automatizados com Cypress

## Como rodar o projeto
1. Instale as dependências (se necessário):
   ```bash
   npm install
   ```
2. Inicie o servidor local:
   ```bash
   npx serve .
   ```
   Acesse `http://localhost:3000` no navegador.

## Estrutura de pastas
- `index.html` - Página principal da aplicação
- `style.css` - Estilos visuais
- `script.js` - Lógica do carrinho e interação
- `cypress/` - Pasta de testes automatizados
- `teste-fast-food/localhost-info.md` - Informações para automação e testes

## Testes automatizados
Os testes Cypress estão na pasta `cypress/e2e`. Para rodar:
```bash
npx cypress open
```

## Requisitos implementados
| ID   | Título do Requisito         | Descrição |
|------|-----------------------------|-----------|
| R01  | Adição de produto ao pedido | Usuário pode adicionar produtos ao pedido, iniciando com quantidade 1 |
| R02  | Alterar quantidade do produto | Usuário pode aumentar ou diminuir quantidade de cada produto |
| R03  | Remover produto do pedido   | Usuário pode remover produto ao zerar quantidade ou clicar em remover |
| R04  | Visualizar resumo do pedido | Exibe nome, quantidade e preço unitário dos produtos |
| R05  | Exibir valor total do pedido | Exibe valor total dos produtos |
| R06  | Pedido vazio                | Exibe mensagem de pedido vazio |
| R07  | Confirmar pedido            | Mensagem de sucesso e fluxo de preparo/entrega |
| R08  | Cancelar pedido             | Limpa itens e exibe mensagem de cancelamento |
| R09  | Mensagem dinâmica           | Mensagem "Produto em preparo" piscando e "Seu lanche saiu para entrega" após confirmação |

## Observações
- O carrinho funciona totalmente em memória, sem banco de dados.
- Toda a funcionalidade está em uma única página.
- O projeto pode ser facilmente adaptado para outros cenários de portfólio.

## Autor
Vinicius F. Leal

---
Dúvidas ou sugestões? Abra uma issue ou entre em contato!

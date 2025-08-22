describe('pedido', () => {
  it('Adição de produtos e confirmar pedido', () => {
    cy.visit('http://192.168.15.8:3000')
    cy.get(':nth-child(1) > button').click()
    cy.get('#lista-produtos > :nth-child(2) > button').click()
    cy.get(':nth-child(3) > button').click()
    cy.get('[onclick="alterarQuantidade(1, 1)"]').click()
    cy.get('[onclick="alterarQuantidade(2, 1)"]').click()
    cy.get('[onclick="alterarQuantidade(3, 1)"]').click()
    cy.get('[onclick="alterarQuantidade(3, 1)"]').click()
    cy.get('#confirmar-pedido').click()
  })
})
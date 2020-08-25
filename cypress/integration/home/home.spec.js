describe('tck cafam', () => {
  it('visit home', () => {
    cy.visit('/home');
    cy.get('.search-bar').click();
    cy.get('#inputSearch').type('empresas');
  });
});
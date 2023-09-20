describe("Teste E2E da página Home", () => {
  beforeEach(() => {
    // Visite a página Home antes de cada teste
    cy.visit("http://localhost:3000/home");
  });

  it("Exibe os skeleton corretamente antes do carregamento", () => {
    // Verifique se os cards são exibidos após o carregamento
    cy.get(".skeleton").should("have.length.at.least", 1); 
  });

  it("Exibe os cards corretamente após o carregamento", () => {
    // Verifique se os cards são exibidos após o carregamento
    cy.get(".card").should("have.length.at.least", 1); 
  });

  it("Redireciona para a página de adição de evento ao clicar em 'Adicionar Evento'", () => {
    // Clique no botão "Add. Evento"
    cy.get("#add-button").click();

    // Verifique se a página de adição de evento foi carregada corretamente
    cy.url().should("include", "/schedule/add");
  });
});
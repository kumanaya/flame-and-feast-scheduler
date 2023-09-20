describe("Teste E2E", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/home");
  });
  it("Fluxo completo", () => {
    // Verifique se a página de redirecionamento está correta
    cy.url().should("include", "/home");

    // Verifique se os cards são exibidos após o carregamento
    cy.get(".skeleton").should("have.length.at.least", 1);

    // Clique no botão "Add. Evento"
    cy.get("#add-button").click();

    // Verifique se a página de adição de evento foi carregada corretamente
    cy.url().should("include", "/schedule/add");

    // Preencha os campos do formulário
    cy.get('input[name="title"]').type("Daniel K.");
    cy.get('input[name="date"]').type("2023-09-20");
    cy.get('input[name="description"]').type("Contratação do novo dev!");

    // Envie o formulário
    cy.get('button[type="submit"]').click();

    // Espera a página carregar
    cy.wait(2000);

    // Verifique se a página de redirecionamento está correta
    cy.url().should("include", "/home");

    // Verifique se os cards são exibidos após o carregamento
    cy.get(".card").should("have.length.at.least", 1);

    // Clicar no primeiro card
    cy.get(".card").first().click();

    // Espera a página carregar
    cy.wait(2000);

    // Preencha os campos do formulário de doação
    cy.get('input[name="name"]').type("Lucas Pinheiro");
    cy.get('select[name="donatedAmount"]').select("R$50.00");

    // Clique no botão "Adicionar"
    cy.get('button[type="submit"]').click();

    // Verifique se a linha de doação foi adicionada corretamente
    cy.contains("Lucas Pinheiro");
    cy.contains("R$50.00");

    // Clique no botão de remoção
    cy.get('button[name="btn-remove"]').last().click();

    // Verifique se "Lucas Pinheiro" e "R$50.00" não existem mais na página
    cy.contains("Lucas Pinheiro").should("not.exist");
  });
});

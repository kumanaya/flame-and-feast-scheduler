describe("Teste E2E da página SchedulePage", () => {
  beforeEach(() => {
    // Visite a página SchedulePage antes de cada teste
    cy.visit("http://localhost:3000/schedule/123");
  });

  it("Adiciona uma linha de doação com sucesso", () => {
    // Preencha os campos do formulário de doação
    cy.get('input[name="name"]').type("Teste");
    cy.get('select[name="donatedAmount"]').select("R$50.00");

    // Clique no botão "Adicionar"
    cy.get('button[type="submit"]').click();

    // Verifique se a linha de doação foi adicionada corretamente
    cy.contains("Teste");
    cy.contains("R$50.00");
  });

  it("Remove uma linha de doação com sucesso", () => {
    // Adicione uma linha de doação
    cy.get('input[name="name"]').type("Teste");
    cy.get('select[name="donatedAmount"]').select("R$50.00");
    cy.get('button[type="submit"]').click();

    // Clique no botão de remoção
    cy.get('button[name="btn-remove"]').last().click();
  });
});

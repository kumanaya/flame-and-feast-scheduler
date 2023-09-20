describe("Teste E2E da página ScheduleAdd", () => {
  beforeEach(() => {
    // Visite a página HomePage antes de cada teste
    cy.visit("http://localhost:3000/schedule/add"); // Certifique-se de substituir "/home" pela rota real da sua página HomePage
  });

  it("Preenche e envia o formulário com sucesso", () => {
    // Preencha os campos do formulário
    cy.get('input[name="title"]').type("Título do Evento");
    cy.get('input[name="date"]').type("2023-12-31");
    cy.get('input[name="description"]').type("Descrição do evento");

    // Envie o formulário
    cy.get('button[type="submit"]').click();

    // Verifique se a página de redirecionamento está correta
    cy.url().should("include", "/home");
  });
});

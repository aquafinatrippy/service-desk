// https://docs.cypress.io/api/introduction/api.html

describe("Start", () => {
  it("Visits the app root url", () => {
    cy.visit("http://localhost:8080/");
    cy.contains("h3", "Create and manage tickets.");
  });
});

describe("Ticket creating", () => {
  it("Create new ticket btn click", () => {
    cy.get(".create").click();
  });
  it("Appends data", () => {
    cy.get("textarea").type("Hello world!");
    cy.get(".v-label")
      .contains("Title")
      .parent()
      .type("e2e test title");
    cy.get(".v-label")
      .contains("E-mail")
      .parent()
      .type("e2eTester@hot.ee");
    cy.get(".v-toolbar__items button span")
      .contains("Create ticket")
      .parent()
      .click();
  });
});

describe("Edit ticket", () => {
  it("clicks on edit button", () => {
    cy.get(".v-card")
      .first()
      .get("button span")
      .contains("Edit ticket")
      .parent()
      .click();
  });
  it("Edits title field", () => {
    cy.get(".v-card")
      .first()
      .get(".v-label")
      .contains("Title")
      .parent()
      .type("e2e test edited title");
  });
  it("Saves edited ticket", () => {
    cy.get(".v-card")
      .first()
      .get("button span")
      .contains("Save ticket")
      .parent()
      .click();
  })
});

describe('Delete ticket', () => {
  it("Clicks delete button", () => {
    cy.get(".v-card")
      .first()
      .get("button span")
      .contains("Delete ticket")
      .parent()
      .click();
  })
})

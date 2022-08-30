describe("Test Note App Functionality", () => {
  it("passes", () => {
    cy.visit("http://localhost:8080/");
  });
  it("Can Create A New Note", () => {
    const newNote = {
      title: "Cypress Test",
      body: "Cypress test note body",
    };
    cy.get('[data-cy="open-note-form"]').click();
    cy.get('[ data-cy="add-note-title-field"]').type(`${newNote.title}{enter}`);
    cy.get('[data-cy="add-note-body-field"]').type(`${newNote.body}{enter}`);
    cy.get('[data-cy="add-note-submit"]').click();
    cy.get('[data-cy="notes-render"]').should("have.length", 1);
  });
  it("Can Edit A New Note", () => {
    const updatedNote = {
      title: "Updated",
      body: "Updated",
    };
    cy.get('[data-cy="note-element"]').trigger("mouseover");
    cy.get('[data-cy="toggle-edit-note"]').click({ force: true });
    cy.get('[data-cy="edit-note-title"]').clear();
    cy.get('[data-cy="edit-note-title"]').type(`${updatedNote.title}{enter}`);
    cy.get('[data-cy="edit-note-body"]').clear();
    cy.get('[data-cy="edit-note-body"]').type(`${updatedNote.body}{enter}`);
    cy.get('[data-cy="submit-edit-note"]').click({ force: true });
    cy.get('[data-cy="edited-note-title"]').should(
      "have.text",
      updatedNote.title
    );
  });
});

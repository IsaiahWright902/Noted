import AddNote from "../components/AddNote.vue";
import AppState from "../AppState";

describe("note application test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });

  it("can create a new note", () => {
    const newNote = {
      title: "Cypress Test",
      body: "Cypress test note body",
    };
    cy.get('[data-cy="open-note-form"]').click();
    cy.get('[ data-cy="add-note-title-field"]').type(`${newNote.title}{enter}`);
    cy.get('[data-cy="add-note-body-field""]').type(`${newNote.body}{enter}`);
    cy.get('[data-cy="add-note-submit"]').click();
    cy
      .get('[data-cy="notes-render"]')
      .should("have.length", 1)
      .last()
      .should("have.text"),
      newNote.title;
  });
});

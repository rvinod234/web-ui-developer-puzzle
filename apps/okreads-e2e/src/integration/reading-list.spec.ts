describe('When: I use the reading list feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should see my reading list', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();

    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'My Reading List'
    );
  });

  it('Then: I should see my reading list and snack bar with  undo action of reading list items', async () => {

    // Click the 'toggle-reading-list' element
    cy.get('[data-testing="toggle-reading-list"]').click();

    // Get the initial number of reading list items
    cy.get('[data-testing="reading-book-list-item"]').then(($items) => {
      
      const initialItemCount = $items.length;

      // Click the 'remove-from-reading-list-button'
      cy.get('[data-testing="remove-reading-list-button"]').click();

      // Wait for the snackbar action button and click it
      cy.get('.mat-simple-snackbar-action').should('be.visible').click();

      // Re-check the number of reading list items and ensure it's the same as before
      cy.get('[data-testing="reading-book-list-item"]').should('have.length', initialItemCount);
      
      cy.wait(2000);
      
      // Click the 'remove-from-reading-list-button' again
      cy.get('[data-testing="remove-reading-list-button"]').click();
      
      cy.wait(1000);

    });

  });

});

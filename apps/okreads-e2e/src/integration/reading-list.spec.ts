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

  it('Then: I should see my reading list with finished feature and finsihed date', async () => {

     // Visit the website
     cy.visit('/');

    
     cy.get('tmo-root').should('contain', 'okreads');
    
     cy.get('input[type="search"]').type('javascript').parent('form').submit();
    
     cy.get('[data-testing="book-item"]').should('have.length.gt', 1);
 
     // Click the first 'Add to Reading List' button
     cy.get('[data-testing="book-item"] button').first().click();
 
     // Click the 'toggle-reading-list' element
     cy.get('[data-testing="toggle-reading-list"]').click();
 
     // Click the 'mark-to-finish-reading-button'
     cy.get('[data-testing="mark-as-finish-button"]').click();
 
     // Wait for 'Finished reading on' text to be present in 'finished-reading-details'
     cy.get('[data-testing="finished-reading-details"]').should('contain', 'Finished reading on');
 
     // Wait for 'Finished' text to be present in 'finished-reading-details'
     cy.get('[data-testing="finished-reading-details"]').should('contain', 'Finished');
 
     // Add a delay for demonstration purposes (you can remove this in your actual tests)
     cy.wait(200);
 
     // Click the 'remove-book-from-readinglist' button
     cy.get('[data-testing="remove-book-from-readinglist"]').click();

  });
});

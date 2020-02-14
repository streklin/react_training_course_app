describe('Navigation Component Test', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('GIVEN application has just started up, WHEN the page loads, THEN we are on the homepage', () => {
        cy
            .get('.home-page');
    });

    it('GIVEN application has just started up, WHEN the user presses the Data Menu option, THEN the sites navigates to the data page', () => {
        cy
            .get('#data-button')
            .click()
            .get('#data-page');
    });
});
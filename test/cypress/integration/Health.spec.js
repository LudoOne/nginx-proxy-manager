/// <reference types="Cypress" />

describe('Basic API checks', () => {
	it('Should return a valid health payload', function() {
		cy.request('/api/').then($response => {
			expect($response.body.status, 'healthy should equal OK').to.equal('OK');
		});
	});
});

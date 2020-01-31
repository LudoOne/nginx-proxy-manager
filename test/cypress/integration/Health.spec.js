/// <reference types="Cypress" />

describe('Basic API checks', () => {
	it('Should return a valid schema payload', function () {
		cy.request('/api/schema').then(data => {
			expect(data.status, 'response status should equal 200').to.equal(200);
		});
	});

	it('Should return a valid health payload', function () {
		cy.sleep(120000)
		cy.task('backendApiGet', {
			path: '/api/',
		}).then((data) => {
			// Check the swagger schema:
			cy.validateSwaggerSchema('get', '/', data);
		});
	});
});

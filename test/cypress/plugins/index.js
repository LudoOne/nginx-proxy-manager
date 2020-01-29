const {SwaggerValidation} = require('@jc21/cypress-swagger-validation');

module.exports = (on, config) => {
	// Replace swaggerFile config var wildcard
	if (typeof config.env.swaggerFile !== 'undefined') {
		config.env.swaggerFile = config.env.swaggerFile.replace('{{baseUrl}}', config.baseUrl);
	}

	// Plugin Events
	on('task', SwaggerValidation(config));
	on('task', require('./backendApi/task')(config));
	on('task', {
		log(message) {
			console.log(message);
			return null;
		}
	});

	return config;
};

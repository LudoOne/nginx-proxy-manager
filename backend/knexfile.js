module.exports = {
    development: {
        client:     'mysql',
        migrations: {
            tableName: 'migrations',
            stub:      'backlend/lib/migrate_template.js',
            directory: 'backend/migrations'
        }
    },

    production: {
        client:     'mysql',
        migrations: {
            tableName: 'migrations',
            stub:      'backend/lib/migrate_template.js',
            directory: 'backend/migrations'
        }
    }
};

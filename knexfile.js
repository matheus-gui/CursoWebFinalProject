// Update with your config settings.

module.exports = {
  
    client: 'postgresql',
    connection: {
      database: 'portifolio',
      user:     'postgres',
      password: '15936989mM@'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  

};

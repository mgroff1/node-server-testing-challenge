
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('cogs')
    .truncate()
    .then(function() {
      return knex('cogs').insert([
        { name: 'Large' },
        { name: 'Medium' },
        { name: 'Small' },
        { name: 'Oval' },
      ]);
    });
};

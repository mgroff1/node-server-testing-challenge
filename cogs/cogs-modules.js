const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(cog) {
  return db('cogs').insert(cog, 'id');
}

async function update(id, changes) {
  return null;//need to implement using TDD
}

function remove(id) {
    return db('cogs')
    .where('id', id)
    .del()
}

function getAll() {
  return db('cogs');
}

function findById(id) {
    return null
}

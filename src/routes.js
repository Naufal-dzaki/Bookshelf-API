// const {
//   addBookHandler,
//   getAllBooksHandler,
//   getBookByIdHandler,
//   editBookByIdHandler,
//   deleteBookByIdHandler,
// } = require('./handler');
const addBookHandler = require('./handler/addBookHandler');
const getAllBooksHandler = require('./handler/getAllBookHandler');
const getBookByIdHandler = require('./handler/getBookByIdHandler');
const editBookByIdHandler = require('./handler/editBookByIdHandler');
const deleteBookByIdHandler = require('./handler/deleteBookByIdHandler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;

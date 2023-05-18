/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
const books = require('../books');

const getAllBooksHandler = (request, h) => {
  const { name, reading, finished } = request.query;
  let newBooks;
  if (name !== undefined) {
    const filterName = books
      .filter((book) => book.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
    if (filterName.length > 0) {
      newBooks = filterName.flatMap(({ id, name, publisher }) => [{ id, name, publisher }]);
    } else {
      const response = h.response({
        status: 'fail',
        message: `Buku dengan judul ${name} tidak ditemukan`,
      });
      response.code(404);
      return response;
    }
  } else if (reading !== undefined) {
    if (reading == 0) {
      newBooks = books.filter((book) => book.reading === false)
        .flatMap(({ id, name, publisher }) => [{ id, name, publisher }]);
    } else if (reading == 1) {
      newBooks = books.filter((book) => book.reading === true)
        .flatMap(({ id, name, publisher }) => [{ id, name, publisher }]);
    } else {
      newBooks = books.flatMap(({ id, name, publisher }) => [{ id, name, publisher }]);
    }
  } else if (finished !== undefined) {
    if (finished == 0) {
      newBooks = books.filter((book) => book.finished === false)
        .flatMap(({ id, name, publisher }) => [{ id, name, publisher }]);
    } else if (finished == 1) {
      newBooks = books.filter((book) => book.finished === true)
        .flatMap(({ id, name, publisher }) => [{ id, name, publisher }]);
    } else {
      newBooks = books.flatMap(({ id, name, publisher }) => [{ id, name, publisher }]);
    }
  } else {
    newBooks = books.flatMap(({ id, name, publisher }) => [{ id, name, publisher }]);
  }
  const response = h.response({
    status: 'success',
    data: {
      books: newBooks,
    },
  });
  response.code(200);
  return response;
};

module.exports = getAllBooksHandler;

const { books } = require('./data/library');

const formatedBookNames = () => books.map((book) => {
  const bookName = book.name;
  const bookGenre = book.genre;
  const bookAuthor = book.author.name;
  return `${bookName} - ${bookGenre} - ${bookAuthor}`;
});

module.exports = { formatedBookNames };

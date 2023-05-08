const { books } = require('./data/library');

const formatedAuthorNamesBirth = () => books.map((book) => {
  const authorName = book.author.name;
  const authorBirthYear = book.author.birthYear;
  return `${authorName} - ${authorBirthYear}`;
});

module.exports = { formatedAuthorNamesBirth };

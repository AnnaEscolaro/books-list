const { books } = require('./data/library');

const nameAndAge = () => books.map((book) => {
  const authorName = book.author.name;
  const authorAge = (book.releaseYear - book.author.birthYear);
  const nameAndAgeObj = {
    author: authorName,
    age: authorAge,
  };
  return nameAndAgeObj;
}).sort((a, b) => a.age - b.age);

console.log(nameAndAge());

module.exports = { nameAndAge };

function authorBornIn1947() {
    return books.find((book) => book.author.birthYear === 1947).author.name;
  }
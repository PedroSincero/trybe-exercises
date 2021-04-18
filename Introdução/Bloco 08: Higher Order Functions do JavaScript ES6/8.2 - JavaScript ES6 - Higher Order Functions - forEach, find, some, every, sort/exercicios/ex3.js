function getNamedBook() {
    return books.find((book) => book.name.length === 26);
  }
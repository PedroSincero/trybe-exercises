function booksOrderedByReleaseYearDesc() {
    return books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
  }
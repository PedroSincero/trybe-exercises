function someBookWasReleaseOnThe80s() {
    return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
  }
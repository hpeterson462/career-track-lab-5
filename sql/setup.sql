DROP TABLE IF EXISTS books;

CREATE TABLE books (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  image TEXT NOT NULL,
  rating TEXT NOT NULL,
  price TEXT NOT NULL,
  stock BOOLEAN NOT NULL
);
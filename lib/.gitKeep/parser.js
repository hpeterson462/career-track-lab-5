const parse = document => {
  const bookElements = [...document.querySelectorAll('section > div > ol.row > li > article.product_pod')];

  return bookElements.map(book => {
    const title = book.querySelector('article.product_pod > h3 > a').getAttribute('title');

    const image = book.querySelector('article.product_pod > h3 > a').getAttribute('href');

    const rating = book.querySelector('article.product_pod > p').getAttribute('class');

    return { title, image, rating };
  })
}

module.exports = parse;
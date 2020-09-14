const request = require('./request');
const parse = require('./parser');

describe('parse function', () => {
  it('returns an array of all book names, ratings, and price', async () => {
    const document = await request();

    const bookNames = parse(document);

    expect(bookNames).toEqual(expect.arrayContaining([
      { title: 'A Light in the Attic', image: 'catalogue/a-light-in-the-attic_1000/index.html', rating: 'three', price: '£51.77', stock: true }
    ]));
  });
});
import { fetchDataFromServer } from 'api';
jest.mock('api');

it('should return data from the BreweryDB database', () => {
  return fetchDataFromServer().then(data => {
    expect(data).not.toBeUndefined;
  });
});

it('should a beer name from the BreweryDB database', () => {
  fetchDataFromServer().then(beer => {
    expect(beer.name).toBe('Murican Pilsner');
  });
});

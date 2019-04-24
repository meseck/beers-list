export const fetchDataFromServer = () => {
  return fetch('/beers')
    .then(res => res.json());
};
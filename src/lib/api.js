export const fetchDataFromServer = page => {
  return fetch('/beers/' + page).then(res => res.json());
};
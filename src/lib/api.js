let controller = new AbortController();

export const fetchDataFromServer = page => {
  controller.abort();
  controller = new AbortController();

  const options = {
    signal: controller.signal,
  };

  const url = `/beers/${page}`;

  return fetch(url, options).then(res => res.json());
};

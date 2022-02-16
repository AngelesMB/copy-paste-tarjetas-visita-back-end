const callToApi = (data) => {
  const serverUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://copy-paste-tarjetas-visita.herokuapp.com'
      : 'http://localhost:4000';

  return fetch(`${serverUrl}/card`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((response) => response);
};

export default callToApi;

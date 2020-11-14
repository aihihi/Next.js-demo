// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';


const requestInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export default function request(url, options) {
  const requestOptions = Object.assign({}, options);
  requestOptions.url = `https://jsonplaceholder.typicode.comurl/${url}`;

  return requestInstance.request(url, requestOptions)
  .then((response) => ({ payload: response.data, header: response.headers }))
  .catch((error) => ({ error }));
}

// export default (req, res) => {
//   res.statusCode = 200
//   res.json({ name: 'John Doe' })
// }

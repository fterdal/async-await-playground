const axios = require('axios');

const rootURL = 'https://jsonplaceholder.typicode.com';
async function fakePost() {
  const response = await axios.get(rootURL + '/posts/1');
  return response.data;
}

async function consLog(asFun) {
  const result = await asFun();
  console.log(result);
}
consLog(fakePost);

// console.log(fakePost); // This just returns an AsyncFunction object, not the result

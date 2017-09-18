const axios = require('axios');

async function hiGoogle() {
  const response = await axios.get('http://google.com');
  return response;
}

async function consLog(asFun) {
  const result = await asFun();
  console.log(result);
}
consLog(hiGoogle);

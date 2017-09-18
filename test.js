const axios = require('axios');

async function hiGoogle(name) {
  const greeting = 'Hello ' + name;
  const response = await axios.get('http://google.com');
  console.log(response);
  console.log(greeting);
  return greeting + response;
}

// console.log(hiGoogle('finn'));
hiGoogle('Finn')

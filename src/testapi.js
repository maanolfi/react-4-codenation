var api = require('marvel-api');

var marvel = api.createClient({
  publicKey: '2176d8bfe115806cac8105cf3c2cbea7',
  privateKey: '9edc37b840e483ee1f0a7e68b5f1bf924e400eeb'
});

marvel.characters.findNameStartsWith('thor').then(res => {
  console.log(res.data[0].thumbnail);
});

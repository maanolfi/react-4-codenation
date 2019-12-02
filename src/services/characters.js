import Api from '../utils/api';
const api = require('marvel-api');

const marvel = api.createClient({
  publicKey: '2176d8bfe115806cac8105cf3c2cbea7',
  privateKey: '9edc37b840e483ee1f0a7e68b5f1bf924e400eeb'
});

class CharacterService {
  static getCharacters(payload) {
    // const { publicKey, timeStamp, hash, limit, name } = payload;
    // return Api.get(
    //   `/v1/public/characters?name=${name}&hash=${hash}&key=${publicKey}&ts=${timeStamp}`
    // );
    const { name } = payload;
    return marvel.characters.findNameStartsWith(name);
  }
}

export default CharacterService;

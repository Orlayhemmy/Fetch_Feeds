import axios from 'axios';
import config from './config';
import Twit from 'twit';

const authTwit = new Twit(config);
export default class Feeds {
  static getFeeds(req, res) {
    axios.get()
  }
}

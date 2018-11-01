import axios from 'axios';
import Twit from 'twit';
import config from './config';

const authTwit = new Twit(config);
/**
 * The controller for fetching twitter tweets
 */
class Feeds {
  /**
   * This method fetches all tweets
   *
   * @param {Object} req
   * @param {Object} res
   *
   */
  static getFeeds(req, res) {
    axios.get();
  }
}

export default Feeds;

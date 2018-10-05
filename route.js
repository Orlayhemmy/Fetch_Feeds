import express from 'express';

const router = express.Router();

router.route('/feeds')
  .get()

export default router;

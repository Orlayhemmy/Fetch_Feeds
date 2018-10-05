import express from 'express';
import Chalk from 'chalk';
import Route from './route';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', Route);

app.set('port', 5000);

app.get('/', (req, res) => res.json({ message: 'Welcome to tweets fetch' }));

app.listen(app.get('port'), () => {
  console.log(Chalk.green(`App started on port ${app.get('port')}`));
});

export default app;

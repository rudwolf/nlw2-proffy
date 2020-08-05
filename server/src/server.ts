import express, { response } from 'express';

const app = express();

app.use(express.json());

app.delete('/users/:id', (req, res) => {
  console.log(req.params);

  const users = [
    { name: 'Rodolfo', age: 35},
    { name: 'NatyPistol', age: 44}
  ]

  return res.json(users);
});

app.listen(3333);
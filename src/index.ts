import express, { Request, Response } from 'express';
import { Client } from 'pg';

console.log(process.env.DATABASE_URL)
const main = async () => {
  const client = new Client(process.env.DATABASE_URL)
  await client.connect().catch((err) => {
    console.log(err, 'Ошибка соединения с базой<----');
  });


  // client.query('select * from posts', (err, res) => {
  //   if (err) throw err;
  //   console.log(res.rows);
  //   //client.end();
  // });





  const app = express();

  const hostname = '127.0.0.1';
  const port = 3000;

  // комментарий
  app.get('/', function (req: Request, res: Response) {
    req.header('Content-Type');
    res.statusCode = 200;
    res.set('Content-type', 'application/json');
    res.send({
      firstName: 'Иван',
      lastName: 'Иванов',
      address: {
        streetAddress: 'Московское ш., 101, кв.101',
        city: 'Ленинград',
        postalCode: 101101,
      },
      phoneNumbers: ['812 123-1234', '916 123-4567'],
    });
  });

  app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
};

main().catch((err) => {
  console.log(err);
});

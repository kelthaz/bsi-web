// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';

export default (req, res) => {
  if (req.method === 'POST') {
    fs.writeFile('./data/aviso-privacidad/data.json', JSON.stringify(req.body, null, 2), (error) => {
      if (error) console.log(error);
      else console.log('El archivo fue creado');
    });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.body));
  }
};

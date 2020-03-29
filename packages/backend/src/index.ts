import express from 'express';

const app = express();

const PORT = 3333;

app.get('/', (request, response) => {
  response.json({
    message: 'Ping',
  });
});

app.listen(PORT, () => {
  console.log(`[SERVER] Running at http://localhost:${PORT}`);
});

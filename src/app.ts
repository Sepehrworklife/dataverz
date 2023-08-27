import express from 'express';

const app = express();

// Initial test route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');  
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Hercai } = require('hercai');
const app = express();
const port = 80;

const herc = new Hercai();

app.use(cors());
app.use(bodyParser.json());

app.post('/api/hercai', async (req, res) => {
  const { question } = req.body;
  const response = await herc.question({ model: "v3", content: question });
  res.json({ reply: response.reply });
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});

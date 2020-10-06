require('dotenv').config();

const express = require('express');
const router = require('./routes');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use('/api/bloggerku', router);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));

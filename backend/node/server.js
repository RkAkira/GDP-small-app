const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { eurostatRouter } = require('./routes/eurostat');

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const port = process.env.PORT || 3000;

app.use('/api/eurostat', eurostatRouter);

app.listen(port, ()=>{
    console.log(`Node Gateway running on port ${port}`);
});
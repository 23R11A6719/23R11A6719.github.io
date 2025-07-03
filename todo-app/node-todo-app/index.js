const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const todoRoutes = require('./routes/TodoRoutes');
app.use('/api/todos', TodoRoutes);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected");
  app.listen(8080, () => console.log("Server running on http://localhost:8080"));
}).catch(err => console.log(err));
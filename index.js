const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post("/points", async (req, res) => {

  try {
    console.log("points received");
    res.status(200).json("Points added to account!");
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
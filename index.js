const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.text());


app.all("/", async (req, res) => {
    console.log({ header: req.headers, body: req.body });
    res.json("suksessss")
});

app.listen(3000, () => {
  console.log(`Server is running on port ${port}`);
});
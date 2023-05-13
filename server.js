const express = require("express");
const cors = require("cors");

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

// const API_KEY = (YOURAPIKEY)

app.post("/completions", async (req, res) => {
    console.log(req)
  try {
    const options = {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: req.body.message }],
        max_tokens: 100,
      }),
    };
    const fetchResult = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    let data = await fetchResult.json();
    res.send(data)
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

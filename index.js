const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON in the request body
app.use(express.json());
app.get("/example",function(req,res){
  console.log(req.headers.authorization);
    console.log("ello");
    res.send("hello my friend");
})
// Endpoint to handle POST requests
app.post("/example", (req, res) => {
  const requestBody = req.body;
  console.log('Request Body:', requestBody);
  res.send('Received the request!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
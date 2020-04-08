const express = require('express')
const app = express()
const PORT = 3000






















app.listen(PORT, () => {
  console.log(`app started on port ${PORT}`);
})

app.get("/health", (req, res) => {
  return res.json({"status": "OK"}).status(200)
});

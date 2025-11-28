const express = require("express");
const app = express();

// Railway assigns a dynamic port, fallback for local dev
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/channels.html");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

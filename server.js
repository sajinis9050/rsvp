const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything in the current folder (your HTML/CSS/JS/images)
app.use(express.static(__dirname));

// Always return index.html for the root (and for any unknown route)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => console.log("Listening on", PORT));

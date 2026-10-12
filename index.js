const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// JSON API endpoint for personal profile
app.get('/profile', (req, res) => {
  res.json({
    name: "Harpreet Singh",
    title: "Software Developer & Engineer",
    bio: "Passionate about software development, web applications, and backend systems.",
    skills: ["JavaScript", "Node.js", "Express", "Python", "Flutter"]
  });
});

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Personal Profile API');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
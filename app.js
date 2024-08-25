const express = require("express")
const app = express()
const port = 8000;



// Routes
app.get('/', (req, res) => {
    res.send("home page");
});

// Handle 404
app.get('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(port, () => {
    console.log(`App is listening on port http://localhost:${port}`)
});


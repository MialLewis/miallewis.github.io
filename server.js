import express from 'express';
const app = express();
const port = 3001;

app.use(express.static('public'));

app.use(express.static('public/travel/build'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

const db = [{
        id: 1,
        author: 'John Doe',
        text: 'This company is worth every coin!'
    },
    {
        id: 2,
        author: 'Amanda Doe',
        text: 'They really know how to make you happy.'
    },
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/testimonials', (req, res) => {
    res.send(db);
});

app.get('/testimonials/random', (req, res) => {
    const randomId = Math.floor(Math.random() * (db.length - 1 + 1) + 1);

    const renderData = db.find(item => item.id == randomId);

    res.send(renderData);
});

app.get('/testimonials/:id', (req, res) => {
    const renderData = db.find(item => item.id == req.params.id);

    if (renderData) {
        res.send(renderData);
    } else {
        res.status(404).send('404 not found...');
    }
});

app.post('/testimonials', (req, res) => {
    const {
        author,
        text
    } = req.body;

    const postData = {
        id: db.length + 1,
        author: author,
        text: text,
    };

    db.push(postData);

    res.send({
        message: "ok"
    });
});


app.put('/testimonials/:id', (req, res) => {
    const {
        author,
        text
    } = req.body;

    const index = db.findIndex(item => item.id == req.params.id);

    db.splice(index, 1, {
        id: Number(req.params.id),
        author: author,
        text: text,
    });

    res.send({
        message: "ok"
    });
    console.log(db);

});

app.delete('/testimonials/:id', (req, res) => {
    const index = db.findIndex(item => item.id == req.params.id);

    db.splice(index, 1);

    res.send({
        message: "ok"
    });
});



app.use((req, res) => {
    res.status(404).send({
        message: 'Not found...'
    });
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
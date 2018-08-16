const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/stuff', (req, res) => {
    res.send({
        payload : [
            {
                id: 1,
                name : "Agiri",
                age: 10,
                gender: "male"
            },
            {
                id: 2,
                name : "Abraham",
                age: 10,
                gender: "male"
            },
            {
                id: 3,
                name : "Junior",
                age: 10,
                gender: "male"
            },
        ]
    })

    console.log('Application response')
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
})

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Application running on ${port}`);

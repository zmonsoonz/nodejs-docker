const app = require('express')();

app.get('/', (req, res) => {
    res.json({message: "Hello"});
})

app.listen(3000, () => console.log('Connected'));

const express = require('express')
const UserModel = require('../src/models/user.model')

const app = express();

app.use(express.json());


app.get('/home', (req, res) => {
    res.contentType('application/html')
    res.status(200).send('<h1>Olá terráqueos!</h1>')
});

app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({});

        res.status(200).json(users)
    }
    catch (error) {
        res.status(500).send(error.mesage);
    }
})

app.get('/users/:id', async (req, res) => {
    try {

        const id = req.params.id;
        const user = await UserModel.findById(id)

        res.status(200).json(user)

    } catch (error) {
        return res.status(500).send(error)
    }
})

app.post("/users", async (req, res) => {
    try {
        const user = await UserModel.create(req.body);

        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const port = 8080;

app.listen(port, () => {
    console.log(`Rodando na porta ${port}!`)
});



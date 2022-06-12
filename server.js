const express = require("express");
const app = express();
const config = require('./config');

const admin = require("firebase-admin");
const credentials = require("./key.json");

admin.initializeApp({
    credential: admin.credential.cert(credentials)
})

const db = admin.firestore();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.post('/create', async (req, res) => {
    try {
        console.log(req.body);
        const newUser = {
            answer1: req.body.answer1,
            answer2: req.body.answer2,
            answer3: req.body.answer3,
            answer4: req.body.answer4,
            answer5: req.body.answer5
        };

        const response = db.collection("responses").add(newUser);
        res.status(200).send(response);
    }
    catch(error) {
        res.status(400).send(error);
    }
})

app.listen(config.PORT, config.HOST, () => {
    console.log(`Server is running on http://${config.HOST}:${config.PORT}.`)
})
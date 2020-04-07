const express = require("express");
const axios = require("axios");

const app = express();


app.get('/global', (req, res) => {

    axios.get('https://covid19.mathdro.id/api')
        .then(function (response) {
            res.send(response.data);
            console.log(response.status);
        })
        .catch(function (error) {
            console.log(error)
        });
});


app.get('/confirmed', (req, res) => {
    axios.get('https://covid19.mathdro.id/api/confirmed')
        .then(function (response) {

            res.send(response.data.sort(function (valor1, valor2) {
                return valor1.confirmed - valor2.confirmed;
            }));
        })
        .catch(function (error) {
            console.log(error)
        });
});


app.get('/daily', (req, res) => {
    axios.get('https://covid19.mathdro.id/api/daily')
        .then(function (response) {

            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error)
        });
});


app.get('/daily/:date', (req, res) => {
    const { date } = req.params;

    axios.get('https://covid19.mathdro.id/api/daily/' + date)
        .then(function (response) {

            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error)
        });
});


app.get('/countries', (req, res) => {
    const { country } = req.params;

    axios.get('https://covid19.mathdro.id/api/countries/')
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error)
        });
});

app.get('/country/:country', (req, res) => {
    const { country } = req.params;

    axios.get('https://covid19.mathdro.id/api/countries/' + country)
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error)
        });
});






app.listen(8080, ()=>{console.log("rodar na porta 8080")});

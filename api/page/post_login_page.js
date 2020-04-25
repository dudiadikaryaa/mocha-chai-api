const supertest = require('supertest')
const env = require('dotenv').config()

const api = supertest(process.env.BASE_URL)

//Hit API Login
const postLogin = (credentials) =>
    api
        .post('/api/login')
        .set('Content-Type', 'application/json')
        .send(credentials)

module.exports = {
    postLogin
}
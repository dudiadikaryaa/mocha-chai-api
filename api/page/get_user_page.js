const supertest = require('supertest')
const env = require('dotenv').config()

const api = supertest(process.env.BASE_URL)

//Hit API Login
const getUser = (userID) =>
    api
        .get('/api/users/' + userID)
        .set('Content-Type', 'application/json')

module.exports = {
    getUser
}
const assert = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));

const env = require('dotenv').config()

const { postLogin } = require('../page/post_login_page')
const schemaPostLogin = require('../data/post_login_schema.json');

const testCase = {
    "positive" : {
       "loginSuccess" : "As an User, I should be able to login"
    },
    "negative" : {
       "loginFailed" : "As a User, I should get error when I input blank on username field"
    }
   }

let credentials

describe(`@postLoginTest`, () => {
    describe(`Positive Case Login`, () => {

        it(`@post ${testCase.positive.loginSuccess}`, async() => {

            credentials = {
                "email" : process.env.USER_EMAIL,
                "password" : process.env.USER_PASSWORD
            }
        
            const loginResponse = await postLogin(credentials)
            // console.log(createResponse)
            assert(loginResponse.status).to.equal(200);
            assert(loginResponse.body).to.be.jsonSchema(schemaPostLogin);
        })
    
    })

    describe(`Negative Case Login`, () => {

        it(`@post ${testCase.negative.loginFailed}`, async() => {

            credentials = {
                "email" : "",
                "password" : process.env.USER_PASSWORD
            }
        
            const loginResponse = await postLogin(credentials)
            // console.log(createResponse)
            assert(loginResponse.status).to.equal(400);
            assert(loginResponse.body.error).to.equal("Missing email or username");
        })
    
    })
})
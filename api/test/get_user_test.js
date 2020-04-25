const assert = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));

const env = require('dotenv').config()

const { getUser } = require('../page/get_user_page')
const schemaGetUser = require('../data/get_user_schema.json');

const testCase = {
    "positive" : {
       "getUserSuccess" : "As an User, I should be able to get user list"
    },
    "negative" : {
       "getUserNotFound" : "As an User, I should get error when I request get for not found user"
    }
   }

let userID

describe(`@getUserTest`, () => {
    describe(`Positive Case get User`, () => {

        it(`@get ${testCase.positive.getUserSuccess}`, async() => {

            userID = 1;
        
            const getUserResponse = await getUser(userID)

            assert(getUserResponse.status).to.equal(200);
            assert(getUserResponse.body.data.id).to.equal(userID);
            assert(getUserResponse.body).to.be.jsonSchema(schemaGetUser);
        })
    
    })

    describe(`Negative Case Get User`, () => {

        it(`@get ${testCase.negative.getUserNotFound}`, async() => {

            userID = "50";
        
            const getUserResponse = await getUser(userID)
            
            assert(getUserResponse.status).to.equal(404);
        })
    
    })
})
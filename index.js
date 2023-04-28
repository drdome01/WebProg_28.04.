const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
//context.log(process.env)
const mongo = new MongoClient(
                  process.env.mongoConnectionString
              )

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const email = (req.query.email || (req.body && req.body.email));
    const responseMessage = "Name: " + name + ", E-Mail: " + email

    context.log(name)
    context.log(email)

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
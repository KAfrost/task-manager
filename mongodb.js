const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {return console.log("'Unable to connecto to database")};

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Kristan',
    //     age: '39'
    // }, (error, result) => {
    //     if (error) {return console.log('Unable to insert user')};
    //     console.log(result.ops);
    // });

    // db.collection('users').insertMany([
    //     {name: 'Jen',
    //      age: 28},
    //     {name: 'Gunter', 
    //       age: 42}
    // ], (error, results) => {
    //     if (error){ return console.log("Unable to insert information")};
    //     console.log(results.ops);
    // });

    db.collection('tasks').insertMany([{
        description: 'Do laundry',
        completed: false
    }, {
        description: 'Wash dishes',
        completed: true
    }, {
        description: 'Put away dishes',
        completed: false
    }], (error, results) => {
        if(error) {return console.log('Unable to add information.')}
        console.log(results.ops);
    });
});

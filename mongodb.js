// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

// destructured object version of above code.
const {MongoClient, ObjectID}= require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {return console.log("'Unable to connecto to database")};

    const db = client.db(databaseName);
    
// chained update call and promise resolution.
//    db.collection('users').updateOne({_id: new ObjectID("61bb77625dd95e3580b66f28")},{
//         $set: {
//             name:'Susanne'
//         }
//     }).then((result) => {
//         console.log(result);
//     }).catch((error) => {
//         console.log(error);
//     });

    // db.collection('users').updateOne({_id: new ObjectID("61bb77625dd95e3580b66f28")},{
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });

    db.collection('tasks').updateMany({completed: false}, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result.modifiedCount);
    }).catch((error) => {
        console.log(error);
    });

});

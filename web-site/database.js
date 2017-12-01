const mongoose = require('mongoose');

const DATABASE_CONNECTION = 'mongodb://mongo/test';
console.log(mongoose);
var kittySchema = mongoose.Schema({
    name: String
});

Kitten = exports.Kitten = mongoose.model('Kitten', kittySchema);

exports.initializeMongo = function(){
    mongoose.connect(DATABASE_CONNECTION);

    console.log('Tying to connect to '+ DATABASE_CONNECTION);

    var db = mongoose.connection;

    db.on('error', console.error.bind(console, "connection error"));
    db.once('open', function(){
        console.log("We are connected");
        addRandomCat();
    })
}


var addRandomCat = function(){
    var sil = new Kitten({
        name: 'Silence #'+Math.random()
    });

    sil.save(function(err, d){
        if(err) return console.error(err);
    });

    console.log("make cat");
}
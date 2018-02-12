var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date,
});

var SomeModel = mongoose.model('SomeModel', SomeModelSchema);

var schema = new Schema({
    name: String,
    binary: Buffer,
    living: Boolean,
    updated: {type: Date, default: Date.now },
    age: {type: Number, min: 18, max: 65, required: true},
    mixed: Schema.Types.Mixed,
    _someId: Schema.Types.ObjectId,
    array: [],
    ofString: [String], // Arrays of other types allowed as well
    nested: {stuff: {type: String, lowercase: true, trim: true }}
})

// Example for validation
var breakfastSchema = new Schema({
    eggs: {
        type: Number,
        min: [6, 'Too few eggs'],
        max: 12,
        required: [true, 'Why no eggs?']
    },
    drink: {
        type: String,
        enum: ['Coffee', 'Tea', 'Water',]
    }
});

var awesome_instance = new SomeModel({name: 'awesome'  });

awesome_instance.save(function (err) {
    if (err) return handleError(err);
    // saved!
});

SomeModel.create({ name: 'also_awesome' }, function (err, awesome_instance) {
    if (err) return handleError(err);
});

// Access model field values using dot notation
console.log (awesome_instance.name); // should log 'awesome'

awesome_instance.name = "New cool name";
awesome_instance.save(function (err) {
    if (err) return handleError(err);
});

var athleteSchema = new Schema ({
    name: Number,
    sport: String,
    age: Number,
});

var Athlete = mongoose.model('Athlete', athleteSchema);

// Find all athletes who play tennis, selecting name and age
// Executes immediately since it has a callback
Athlete.find({ 'sport': 'Tennis' }, 'name age', function(err, athletes) {
    if (err) return handleError(err);
    // athletes contains list of athletes
})

var query = Athlete.find({ 'sport': 'Tennis' });

query.select('name age');
query.limit(5);
query.sort({age: -1 });

query.exec(function (err, athletes) {
    if (err) return handleError(err);
})
// Identical query with extra where query on age
Athlete.find().where('sport').equals('Tennis'),
    where('age').gt(17).lt(50).
    limit(5).
    sort({ age: -1 }).
    select('name age'),
    exec(function (err, athletes) {
        if (err) return handleError(err)
    })


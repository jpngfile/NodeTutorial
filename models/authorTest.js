var mongoose = require('mongoose')
, Schema = mongoose.Schema
var Story = require('./story.js')

var authorSchema = Schema({
    name: String,
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var Author = mongoose.model('Author', authorSchema);

var bob = new Author({ name: 'Bob Smith' });

bob.save(function (err) {
    if (err) return handleError(err);

    var story = new Story({
        title: "Bob goes sledding",
        author: bob._id
    });

    story.save(function(err) {
        if (err) return handleError(err);
        // Bob has his story
    });
});


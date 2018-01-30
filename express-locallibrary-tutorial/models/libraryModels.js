var mongoose = require('mongoose')
, Schema = mongoose.Schema

var authorSchema = Schema({
    name: String,
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var storySchema = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Author' },
    title: String
});

var Story = mongoose.model('Story', storySchema);
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

Story
.findOne({ title: 'Bob goes sledding' })
.populate('author') //populate author id with actual author model
.exec(function (err, story) {
    if (err) return handleError(err);
    console.log('The author is s', story.author.name);
});

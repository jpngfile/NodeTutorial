var mongoose = require('mongoose')
, Schema = mongoose.Schema

var storySchema = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Author' },
    title: String
});

var Story = mongoose.model('Story', storySchema);

Story
.findOne({ title: 'Bob goes sledding' })
.populate('author') //populate author id with actual author model
.exec(function (err, story) {
    if (err) return handleError(err);
    console.log('The author is s', story.author.name);
});

module.exports = Story

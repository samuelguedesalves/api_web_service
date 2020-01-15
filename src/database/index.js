const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://checktask:checktask1472@checktask-ianip.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});
//mongoose.Promise = global.Promise;

module.exports = mongoose;
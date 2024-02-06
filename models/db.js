const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/StudentDB', {
    useNewUrlParser: true,
})
.then(() => {
    console.log('Connection succeeded');
})
.catch((err) => {
    console.log('Error in connection', err);
});

require('./student.model');
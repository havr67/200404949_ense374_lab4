const mogoose = require('mogoose');
mogoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useNewUrlTopology: true});


async function databaseCalls(){

    const userSchema = new mogoose.Schema({
        username: String,
        password: String,
    })

    const user = mongoose.model ("user", userSchema);

    const taskSchema = new mogoose.Schema({
        _id: Number,
        name: String,
        owner: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
        create: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
        done: Boolean,
        cleared: Bollean,
    })

    const task = mongoose.model("task", taskSchema);

}

databaseCalls()




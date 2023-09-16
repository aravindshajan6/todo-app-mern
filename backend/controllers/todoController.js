const TodoModel = require('../models/Todo');

exports.getTodos = async (req, res) => {
    await TodoModel.find()
            .then((result) => {
                res.json(result);
                // console.log(result);
            })
            .catch((err) => {
                console.log(err.message);
            })
}


// add task 
exports.addTodo = async (req, res) => {

    const task = req.body.task;

        await TodoModel.create({
            task: task,
        })
        .then(result => {
            res.json(result);
            console.log('task added !');
        })
        .catch((err) =>  { 
            res.json(err.message)
            console.log('task adding failed !')
        });
    

}

//update task
exports.updateTodo = async (req, res) => {

    const {id} = req.params;
    // console.log(req.params);
    console.log('id : ', id);

        const doc = await TodoModel.findById({ _id: id });
        console.log(doc.done);

        await TodoModel.findByIdAndUpdate({_id: id}, { done: !doc.done })
        .then((result) => {
            res.json(result)
            console.log('task updated !')    
        })
        .catch((err) => {
            res.json(err.message);
            console.log('task update failed !')    
        });
    
    
}

//delete task
exports.deleteTodo = async (req, res) => {

    const {id} = req.params;
    console.log(id);

        await TodoModel.findByIdAndDelete({_id: id})
        .then((result) => {
            res.json(result);
            console.log('task deletion successful !');
        })
        .catch((err) => {
            res.json(err.message);
            console.log('Task not deleted !');   
        });
    
    
} 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classroomSchema = new Schema({
    className: {type:String, required:true},
    section: {type:String, required:true},
    subject: {type:String, required:true},
    room: {type:String, required:true}
});

const Classroom = mongoose.model('classroom', classroomSchema, 'classroom');
const mySchemas = {'Classroom':Classroom};

module.exports = mySchemas;
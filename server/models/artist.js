const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    years: {
        type: String,
        required: true
    },
   genre:{
       type:String,
       required:true
   },
   nationality:{
       type:String,
       required:true
   },
   bio:{
       type:String,
       required:true
   },
   wikipedia:{
       type:String,
       required:true
   },
   painting:{
       type:Number,
       required:true
   }
}, {
    timestamps: true
});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;

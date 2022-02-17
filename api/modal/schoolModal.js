const mongoose = require("mongoose");
const schoolSchema = new mongoose.Schema({
  
  schoolName:{
    type:String,
    trim:true,
    required:true,
    default:null
  },
  contactNumber:{
    type:String,
    trim:true,
    required:true,
    default:null
  },
  username:{
    type:String,
    trim:true,
    required:true,
    default:null
  },
  email:{
    type:String,
    trim:true,
    required:true,
    default:null
  },
  hashPassword:{
    type:String,
    trim:true,
    required:true,
    default:null
  },
  address:{
    type:String,
    trim:true,
    required:true,
    default:null
  },
  pic:{
    type:String,
    trim:true, 
    default:null
  },
  status:{
    type:String,
    trim:true,
    required:true,
    default:null
  }
},{timestamps:true});

module.exports = mongoose.model("school",schoolSchema);
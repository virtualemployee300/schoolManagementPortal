const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const controllerPath = "../controller";

const {login,schoolAdd,schoolDetails,schoolDelete} = require(`${controllerPath}/SchoolAuth`);
const storage = multer.diskStorage({
  destination:function (req, file, cb) {
    cb(null, "./uploads")
  },
  filename:(req,file,cb)=>{
     return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
   }
})

const upload = multer({
  storage:storage
})
var uploadFile=upload.fields([{name: 'pic'}]);
// var uploadFile=upload.single('pic');
 router.post("/login",login);
 // router.post("/studentAdd",uploadFile,studentAdd);
 router.post("/schoolAdd",uploadFile,schoolAdd);
 router.get("/schoolDetails",schoolDetails);
 router.post("/schoolDelete",schoolDelete);

module.exports = router;
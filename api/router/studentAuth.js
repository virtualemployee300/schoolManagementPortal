const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const controllerPath = "../controller";
const {login,studentAdd,studentDetails,studentDelete,studentGetData,studentUpdate} = require(`${controllerPath}/studentAuth`);
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
 router.post("/studentAdd",uploadFile,studentAdd);
 router.get("/studentDetails",studentDetails);
 router.post("/studentDelete",studentDelete);
 router.post("/studentGetData",studentGetData);
 router.post("/studentUpdate",uploadFile,studentUpdate);

module.exports = router;
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const controllerPath = "../controller";
const {login,facultyAdd,facultyDetails,facultyDelete,facultyGetData,facultyUpdate} = require(`${controllerPath}/facultyAuth`);
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
 // router.post("/facultyAdd",uploadFile,facultyAdd);
 router.post("/facultyAdd",uploadFile,facultyAdd);
 router.get("/facultyDetails",facultyDetails);
 router.post("/facultyDelete",facultyDelete);
 router.post("/facultyGetData",facultyGetData);
 router.post("/facultyUpdate",uploadFile,facultyUpdate);

module.exports = router;
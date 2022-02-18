const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Faculty = require("../modal/facultyModal");
const {responseError,responseSuccess} = require("../helper/Status");


exports.login = (req,res) =>{
     const {email,password} = req.body;
     console.log(req.body);
     User.findOne({email:email})
         .exec(async(err,data)=>{

         	if(err){
         		return responseError(res,201,4);
         	}
         	if(data){
         		const checkPassword = await data.authenticate(password);
         		if(checkPassword && (data.role==="user" || data.role==="Admin")){
         			const token = jwt.sign({_id:data._id,role:data.role},process.env.port,{expiresIn:"1d"})
    			    res.cookie("token",token,{expiresIn:"1d"})
                    const {_id,fname,lname,email,username,role,fullname} = data;
    			    const userDetail = {token,user:{_id,fname,lname,email,username,role}};
    			    return responseSuccess(res,200,userDetail);
         		}
         	}else{
               return responseError(res,201,10);
         	}
         })
}






exports.facultyAdd=(req,res,next)=>{  
     
    var pic=req.files.pic[0].filename;
    console.log(pic)

     
    const {fname,lname,email,username,password,address,schoolName} = req.body;
     
 
    Faculty.findOne({email:email}).exec(async(err,data)=>{
    	
    	if(data){
    		return responseError(res,201,14);
    	}
    	const hashPassword =  await bcrypt.hash(password,10);
        const role = "faculty";
        const otp = Math.floor(100000+Math.random()*900000);
        const status = "active";
        // const profilePic = req.hostname+"/"+pic;
    	const facultyData =new Faculty({
    		fname,lname,email,username,address,hashPassword,pic:pic,status,schoolName
    	});
        
    	facultyData.save((err,dt)=>{
            
    		if(err){
                console.log(err);
    			return responseError(res,201,4);
    		}
    		if(dt){     			
                const token = jwt.sign({_id:dt._id,role:dt.role},process.env.port,{expiresIn:"1d"})
    			res.cookie("token",token,{expiresIn:"1d"})
                const {_id,fname,lname,email,username,address,fullname,schoolName} = dt;
    			const userDetail = {token,user:{_id,fname,lname,email,username,role,schoolName}}; 
    			return responseSuccess(res,200,userDetail);
    		}
    	})

    })
}

exports.facultyDetails=(req,res)=>{ 
    Faculty.find({})
    .exec((err,data)=>{
          if(err){
                console.log(err);
                return responseError(res,201,4);
            } 
           if(data){
                return responseSuccess(res,200,data);
            }else{
                return responseError(res,201,12);
            }
    })
}

exports.facultyGetData=(req,res)=>{  

    Faculty.findOne({_id:req.body.id})
    .exec((err,data)=>{
          if(err){
                console.log(err);
                return responseError(res,201,4);
            } 
           if(data){
                const {_id,fname,lname,email,username,schoolName,address,pic} =data;
                const userDetail = {_id,fname,lname,email,username,schoolName,address,pic}; 
                return responseSuccess(res,200,userDetail);
            }else{
                return responseError(res,201,12);
            }
    })
}
exports.facultyUpdate=(req,res)=>{ 
    var pic=req.files.pic[0].filename;
    console.log(pic)
    
     
    const {id,fname,lname,email,username,password,address,schoolName} = req.body;
    Faculty.findOneAndUpdate({_id:id},{$set:{fname,lname,email,username,password,address,schoolName,pic}})
    .exec((err,data)=>{
          if(err){
                console.log(err);
                return responseError(res,201,4);
            } 
           if(data){
                const {_id,fname,lname,email,username,schoolName,address,pic} =data;
                const userDetail = {_id,fname,lname,email,username,schoolName,address,pic}; 
                return responseSuccess(res,200,userDetail);
            }else{
                return responseError(res,201,12);
            }
    })
}






exports.facultyDelete=(req,res)=>{ 
    console.log(req.body)
    Faculty.findOneAndDelete({_id:req.body.deleteId})
    .exec((err,data)=>{
          if(err){
                console.log(err);
                return responseError(res,201,4);
            } 
           if(data){
                return responseSuccess(res,200,data);
            }else{
                return responseError(res,201,12);
            }
    })
}

import React,{useEffect,useState} from 'react'
import {Link} from "react-router-dom";
// axios using for api fetching
import axios from "axios";

// components

export default function AddStudentCart() {
  //These state to store the form value
        const [fname,setFname] = useState("");
        const [lname,setLname] = useState("");
        const [email,setEmail] = useState("");
        const [username,setUsername] = useState("");
        const [password,setPassword] = useState("");
        const [address,setAddress] = useState("");
        const [schoolName,setSchoolName] = useState("");
        const [profilePic,setProfilePic] = useState("");
        const [msg,setMsg] = useState(false);

        const [schoolData,setSchoolData] = useState([]);

  //These state to store the form value
         const resData=async()=>{
             const res = await axios.get("http://localhost:3000/api/schoolDetails");
             setSchoolData(res.data);
         }
         console.log(schoolData);
         useEffect(()=>{
          resData();
         },[])
         
          const addStudent=async()=>{
            // function use for Add form data in db using api
            const formData = new FormData();
            formData.append('pic', profilePic[0]);
            formData.append('fname', fname);
            formData.append('lname', lname);
            formData.append('email', email);
            formData.append('username', username);
            formData.append('password', password);
            formData.append('address', address);
            formData.append('schoolName', schoolName);

            console.log(profilePic[0])



            await axios({
                    method: "post",
                    url: "http://localhost:3000/api/studentAdd",
                    data: formData,
                    headers: { "Content-Type": "multipart/form-data" },
                   })
                 .then(function (res) {
                   if(res.status===200){
                   setMsg(true);
                    }     
                 })
                 .catch(function (response) {
                   //handle error
                   console.log(response);
                 });

            // const data={
            //     fname,lname,email,username,password,address
            // }
            // const res = await axios.post("http://localhost:3000/api/studentAdd",data);
            // console.log(res.status)
            // if(res.status===200){
            //   setMsg(true);
            // }
          }
  return (
    <>
      {/*Component Page*/}
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Add New Student</h6> 
            <Link to="/admin/studentdetails"
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              View Students
            </Link>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="username"
                    onChange={(e)=>setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="email"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="name"
                    onChange={(e)=>setFname(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="lname"
                    onChange={(e)=>setLname(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="password"
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Image File
                  </label>
                  <input
                    type="file"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="pic"
                    onChange={(e)=>setProfilePic(e.target.files)}
                  />
                </div>
              </div>
            </div>


            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Choose School
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Schools
                  </label>
                  <select
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                    name="address"
                    onChange={(e)=>setSchoolName(e.target.value)}
                  >
                  <option></option>
                  {schoolData.map((data)=>(
                   <option key={data.schoolName} value={data.schoolName}>{data.schoolName}</option>
                    ))}

                  </select>
                </div>
              </div>  
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Contact Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="address"
                    onChange={(e)=>setAddress(e.target.value)}
                  />
                </div>
              </div>  
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />
            <div className="text-right mt-5">
            {/*Show Messages When data fill successfully*/}
            {msg===true?<span className="p-5">Student Added Successfully</span>:""}
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={(e)=>addStudent()}
            >
              Add
            </button>
            </div>
 
          </form>
        </div>
      </div>
    </>
  );
}

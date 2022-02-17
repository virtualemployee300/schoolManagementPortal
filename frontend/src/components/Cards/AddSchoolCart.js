import React,{useState} from 'react'
import {Link} from "react-router-dom";
// axios using for api fetching
import axios from "axios";

// components

export default function AddSchoolCart() {
        // Use for first step get all api data from functions
        const [schoolName,setSchoolName] = useState("");
        const [contactNumber,setContactNumber] = useState("");
        const [email,setEmail] = useState("");
        const [username,setUsername] = useState("");
        const [password,setPassword] = useState("");
        const [address,setAddress] = useState("");
        const [profilePic,setProfilePic] = useState("");
        const [msg,setMsg] = useState(false);
         
         // function use for Add form data in db using api
          const addStudent=async()=>{

            const formData = new FormData();
            formData.append('pic', profilePic[0]);
            formData.append('schoolName', schoolName);
            formData.append('contactNumber', contactNumber);
            formData.append('email', email);
            formData.append('username', username);
            formData.append('password', password);
            formData.append('address', address);

            console.log(profilePic[0])


            //function for post  api data
            await axios({
                    method: "post",
                    url: "http://localhost:3000/api/schoolAdd",
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
 
          }
  return (
    <>
      {/*Component Page*/}
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Add New School</h6> 
            <Link to="/admin/schooldetails"
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              View Schools
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
                    School Username
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
                    School Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="schoolName"
                    onChange={(e)=>setSchoolName(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    School Contact Number
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="contactNumber"
                    onChange={(e)=>setContactNumber(e.target.value)}
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
            {msg===true?<span className="p-5">School Added Successfully</span>:""}
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

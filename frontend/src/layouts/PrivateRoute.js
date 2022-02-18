import React from 'react'
import {Route,Redirect} from 'react-router-dom' 

 
export const AdminRouter=({component:Component,...rest})=>{
     
     return <Route {...rest} component={(props)=>{
          const adminToken = window.localStorage.getItem("token");
         
           if(adminToken){
              return <Component {...props} />
           }else{ 
               return <Redirect to={"/auth/login"} />
          }
     }} />
} 



 


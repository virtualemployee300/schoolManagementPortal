import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {AdminRouter} from "./PrivateRoute"

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import AddStudents from "views/admin/AddStudents.js";
import StudentDetails from "views/admin/StudentDetails";
import SchoolDetails from "views/admin/SchoolDetails";
import AddSchools from "views/admin/AddSchools";
import FacultyDetails from "views/admin/FacultyDetails";
import AddFaculty from "views/admin/AddFaculty";
import EditStudent from "views/admin/EditStudent";
import EditFaculty from "views/admin/EditFaculty";
import EditSchool from "views/admin/EditSchool";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <AdminRouter path="/admin/dashboard" exact component={Dashboard} />  
            <AdminRouter path="/admin/addstudents" exact component={AddStudents} />
            <AdminRouter path="/admin/studentdetails" exact component={StudentDetails} />
            <AdminRouter path="/admin/schooldetails" exact component={SchoolDetails} />
            <AdminRouter path="/admin/addschools" exact component={AddSchools} />
            <AdminRouter path="/admin/facultydetails" exact component={FacultyDetails} />
            <AdminRouter path="/admin/AddFaculty" exact component={AddFaculty} />
            <AdminRouter path="/admin/studentedit/:id" exact component={EditStudent} />
            <AdminRouter path="/admin/facultyedit/:id" exact component={EditFaculty} />
            <AdminRouter path="/admin/schooledit/:id" exact component={EditSchool} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}

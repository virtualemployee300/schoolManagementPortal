import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

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
            <Route path="/admin/dashboard" exact component={Dashboard} /> 
            <Route path="/admin/tables" exact component={Tables} />
            <Route path="/admin/addstudents" exact component={AddStudents} />
            <Route path="/admin/studentdetails" exact component={StudentDetails} />
            <Route path="/admin/schooldetails" exact component={SchoolDetails} />
            <Route path="/admin/addschools" exact component={AddSchools} />
            <Route path="/admin/facultydetails" exact component={FacultyDetails} />
            <Route path="/admin/AddFaculty" exact component={AddFaculty} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}

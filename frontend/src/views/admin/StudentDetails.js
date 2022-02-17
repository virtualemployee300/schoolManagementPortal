import React from 'react' 
import StudentDetails from "components/Cards/StudentDetails.js";

export default function AddStudents() {
	return (
		<div>
		<div className="flex flex-wrap">
        <div className="w-full lg:w-full px-4">
          <StudentDetails/>
        </div> 
      </div>
			
		</div>
	)
}
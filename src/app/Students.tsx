"use client";

import { StudentDataContext } from "@/Context/AllStudents";

const Students = () => {
  const { stData, deleteStudent, editStudent, seeDetails } = StudentDataContext();
  return (
    <>
      {stData.map(({ name, rollNumber }, index) => (
        <tr key={name + index}>
          <td style={{ border: "1px solid black", padding: "10px" }}>{name}</td>
          <td style={{ border: "1px solid black", padding: "10px" }}>
            {rollNumber}
          </td>
          <td style={{ border: "1px solid black", padding: "10px"}}>
            <button onClick={() => seeDetails(index)} style={{fontWeight: "550"}}>See Details</button>
          </td>
          <td style={{ border: "1px solid black", padding: "10px"}}>
            <button onClick={() => deleteStudent(index)} style={{fontWeight: "550"}}>Delete</button>
          </td>
          <td style={{ border: "1px solid black", padding: "10px"}}>
            <button onClick={() => editStudent(index)} style={{fontWeight: "550"}}>Edit</button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Students; 

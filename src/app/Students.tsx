"use client";

import { StudentDataContext } from "@/Context/AllStudents";

const Students = () => {
  const { stData, deleteStudent } = StudentDataContext();
  return (
    <>
      {stData.map(({ name, fatherName, rollNumber, test1, test2 }, index) => (
        <tr key={name + index}>
          <td style={{ border: "1px solid black", padding: "10px" }}>{name}</td>
          <td style={{ border: "1px solid black", padding: "10px" }}>
            {fatherName}
          </td>
          <td style={{ border: "1px solid black", padding: "10px" }}>
            {rollNumber}
          </td>
          <td
            style={{
              border: "1px solid black",
              padding: "10px",
              color: test1 ? "lime" : "red",
              fontWeight: "650",
            }}
          >
            {test1 ? "Passed" : "Failed"}
          </td>
          <td
            style={{
              border: "1px solid black",
              padding: "10px",
              color: test2 ? "lime" : "red",
              fontWeight: "650",
            }}
          >
            {test2 ? "Passed" : "Failed"}
          </td>
          <td style={{ border: "1px solid black", padding: "10px" }}>
            <button>See Details</button>
          </td>
          <td style={{ border: "1px solid black", padding: "10px" }}>
            <button onClick={() => deleteStudent(index)}>Delete</button>
          </td>
          <td style={{ border: "1px solid black", padding: "10px" }}>
            <button>Edit</button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Students;

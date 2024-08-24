"use client";

import StudentType from "./studentstype";

type AllStudentsType = {
  stdData: StudentType[];
  deleteStudent: (index: number) => void
};

const AllStudents = ({ stdData, deleteStudent }: AllStudentsType) => {
  return (
    <>
      {stdData.map(({ name, fatherName, rollNumber, test1, test2 }, index) => (
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
              color: test1 ? "green" : "red",
            }}
          >
            {test1 ? "Passed" : "false"}
          </td>
          <td
            style={{
              border: "1px solid black",
              padding: "10px",
              color: test2 ? "green" : "red",
            }}
          >
            {test2 ? "Passed" : "false"}
          </td>
          <td style={{ border: "1px solid black", padding: "10px" }}>
            <button>See Details</button>
          </td>
          <td style={{ border: "1px solid black", padding: "10px" }}>
            <button onClick={() => deleteStudent(index)}>Delete</button>
          </td>
          <td style={{ border: "1px solid black", padding: "10px" }}>
            <button>Edit </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default AllStudents;

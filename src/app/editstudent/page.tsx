"use client";
 
import { EditStdDataContext } from "@/Context/AllStudents";
import { useState } from "react";

const EditStudent = () => {
  const { name, fatherName, rollNumber, editedStudent } = EditStdDataContext();
  const [editName, setEditName] = useState(name);
  const [editFatherName, setEditFatherName] = useState(fatherName);
  const [editRollNumber, setEditRollNumber] = useState(rollNumber);

  return (
    <>
      <input
        type="text"
        placeholder="Enter your edit name"
        value={editName}
        onChange={(e) => setEditName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter your edit father name"
        value={editFatherName}
        onChange={(e) => setEditFatherName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter your edit roll number"
        value={editRollNumber}
        onChange={(e) => setEditRollNumber(e.target.value)}
      />
      <br />
      <br />
      <button
        onClick={() => {
          editedStudent(editName, editFatherName, editRollNumber);
        }}
      >
        Save
      </button>
    </>
  );
};

export default EditStudent;

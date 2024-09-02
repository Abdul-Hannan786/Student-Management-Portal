"use client";

import { EditStdDataContext } from "@/Context/AllStudents";
import { useState } from "react";

const EditStudent = () => {
  const { name, fatherName, rollNumber, test1, test2, editedStudent } =
    EditStdDataContext();
  const [editName, setEditName] = useState(name);
  const [editFatherName, setEditFatherName] = useState(fatherName);
  const [editRollNumber, setEditRollNumber] = useState(rollNumber);
  const [editTest1, setEditTest1] = useState(test1);
  const [editTest2, setEditTest2] = useState(test2);

  return (
    <div style={{ fontFamily: "sans-serif" }}>
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

      <span>Edit Test 1 Result : </span>
      <select
        value={editTest1}
        onChange={(e) => {
          setEditTest1(e.target.value);
        }}
      >
        <option value="Passed">Passed</option>
        <option value="Failed">Failed</option>
      </select>

      <br />
      <br />

      <span>Edit Test 2 Result : </span>
      <select
        value={editTest2}
        onChange={(e) => {
          setEditTest2(e.target.value);
        }}
      >
        <option value="Passed">Passed</option>
        <option value="Failed">Failed</option>
      </select>

      <br />
      <br />

      <button
        onClick={() => {
          editedStudent(
            editName,
            editFatherName,
            editRollNumber,
            editTest1,
            editTest2
          );
        }}
      >
        Save
      </button>
    </div>
  );
};

export default EditStudent;

"use client";

import { StudentDataContext } from "@/Context/AllStudents";
import { StudentType } from "@/Types/StudentType";
import { useState } from "react";

const CreateStudent = () => {
  const { addNewStudent } = StudentDataContext();
  const [rollNumber, setRollNumber] = useState("");
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [test1, setTest1] = useState("Failed");
  const [test2, setTest2] = useState("Failed");

  const handleStudent = () => {
    const newStudent = {
      name,
      fatherName,
      rollNumber,
      test1,
      test2,
    };
    addNewStudent(newStudent);
  };

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter your father name"
        value={fatherName}
        onChange={(e) => setFatherName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter your roll number"
        value={rollNumber}
        onChange={(e) => setRollNumber(e.target.value)}
      />
      <br />
      <br />
      <span>Test 1 Result: </span>
      <select value={test1} onChange={(e) => setTest1(e.target.value)}>
        <option value="Failed">Failed</option>
        <option value="Passed">Passed</option>
      </select>
      <br />
      <br />
      <span>Test 1 Result: </span>
      <select value={test2} onChange={(e) => setTest2(e.target.value)}>
        <option value="Failed">Failed</option>
        <option value="Passed">Passed</option>
      </select>
      <br />
      <br />
      <button onClick={handleStudent}>Create Student</button>
    </div>
  );
};

export default CreateStudent;
"use client";

import React, { createContext, useContext, useState } from "react";

const students = [
  {
    name: "Abdul Hannan",
    fatherName: "Muhammad Saleem",
    rollNumber: 188528,
    test1: true,
    test2: true,
  },
  {
    name: "Abdul Latif",
    fatherName: "Muhammad Hanif",
    rollNumber: 188529,
    test1: true,
    test2: false,
  },
  {
    name: "Haider Ali Shah",
    fatherName: "Muhammad Alam",
    rollNumber: 188530,
    test1: false,
    test2: true,
  },
  {
    name: "Muhammad Hamza",
    fatherName: "Muhammad Omer",
    rollNumber: 188531,
    test1: false,
    test2: false,
  },
];

const StudentContext = createContext({});
const EditStudentContext = createContext({});

const AllStudents = ({ children }: { children: React.ReactNode }) => {
  const [stData, setStData] = useState(students);
  const [name, setName] = useState("")
  const [fatherName, setFatherName] = useState("")
  const [rollNumber, setRollNumber] = useState("")

  const deleteStudent = (index: number) => {
    let cloneStudents = [...stData];
    cloneStudents.splice(index, 1);
    setStData([...cloneStudents]);
  };
  

  const editStudent = () => {};

  return (
    <>
      <EditStudentContext.Provider value={editStudent}>
        <StudentContext.Provider value={{ stData, deleteStudent }}>
          {children}
        </StudentContext.Provider>
      </EditStudentContext.Provider>
    </>
  );
};

export default AllStudents;

export const StudentDataContext = () => useContext(StudentContext);
export const EditStdtDataContext = () => useContext(EditStudentContext);

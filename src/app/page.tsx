"use client";

import { useState } from "react";
import AllStudents from "./AllStudents";
import StudentType from "./studentstype";

const students: StudentType[] = [
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
    test1: false,
    test2: true,
  },
  {
    name: "Haider Ali Shah",
    fatherName: "Muhammad Alam",
    rollNumber: 188530,
    test1: true,
    test2: false,
  },
  {
    name: "Muhammad Hamza",
    fatherName: "Muhammad Omer",
    rollNumber: 188531,
    test1: false,
    test2: false,
  },
];

export default function Home() {
  const [stdData, setStdData] = useState<StudentType[]>(students);

  const deleteStudent = (index: number) => {
    let cloneStudent = [...stdData]
    cloneStudent.splice(index, 1)
    setStdData([...cloneStudent])
  }

  return (
    <>
      <h1>Student Portal Management</h1>
      <table style={{border: "1px solid black", fontFamily: "sans-serif"}}>
        <thead>
          <tr>
            <th style={{border: "1px solid black", padding: "10px"}}>Name</th>
            <th style={{border: "1px solid black", padding: "10px"}}>Father Name</th>
            <th style={{border: "1px solid black", padding: "10px"}}>Roll Number</th>
            <th style={{border: "1px solid black", padding: "10px"}}>Test 1</th>
            <th style={{border: "1px solid black", padding: "10px"}}>Test 2</th>
            <th style={{border: "1px solid black", padding: "10px"}}>See Details</th>
            <th style={{border: "1px solid black", padding: "10px"}}>Delete</th>
            <th style={{border: "1px solid black", padding: "10px"}}>Edit</th>
          </tr>
        </thead>
        <tbody>
          <AllStudents stdData={stdData} deleteStudent={deleteStudent}/>
        </tbody>
      </table>
    </>
  );
}

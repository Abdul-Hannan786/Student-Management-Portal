"use client";

import { useState } from "react";
import AllStudents from "./AllStudents";

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

  return (
    <>
      <h1>Student Portal Management</h1>
      <AllStudents />
    </>
  );
}

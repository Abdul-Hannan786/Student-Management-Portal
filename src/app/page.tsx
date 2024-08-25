"use client";

import { useState } from "react";
import AllStudents from "./AllStudents";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <h1 style={{fontFamily: "sans-serif"}}>Student Portal Management</h1>
      <button
        style={{
          marginBottom: "10px",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid grey",
          fontWeight: "600"
        }}
        onClick={() => router.push("./createstudent")}
      >
        Add Student
      </button>
      <AllStudents />
    </>
  );
}

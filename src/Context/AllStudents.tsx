"use client";

import { StudentType } from "@/Types/StudentType";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

const students = [
  {
    name: "Abdul Hannan",
    fatherName: "Muhammad Saleem",
    rollNumber: "188528",
    test1: "Passed",
    test2: "Passed",
  },
  {
    name: "Abdul Latif",
    fatherName: "Muhammad Hanif",
    rollNumber: "188529",
    test1: "Passed",
    test2: "Failed",
  },
  {
    name: "Haider Ali Shah",
    fatherName: "Muhammad Alam",
    rollNumber: "188530",
    test1: "Failed",
    test2: "Passed",
  },
  {
    name: "Muhammad Hamza",
    fatherName: "Muhammad Omer",
    rollNumber: "188531",
    test1: "Failed",
    test2: "Failed",
  },
];

type StudentContextType = {
  stData: StudentType[];
  deleteStudent: (index: number) => void;
  editStudent: (index: number) => void;
  addNewStudent: (newStudent: StudentType) => void;
  seeDetails: (index: number) => void;
};

type EditStudentContext = {
  name: string;
  fatherName: string;
  rollNumber: string;
  editedStudent: (
    editedName: string,
    editedFatherName: string,
    editedRollNumber: string
  ) => void;
};

const StudentContext = createContext<StudentContextType>({
  stData: [],
  deleteStudent: () => {},
  editStudent: () => {},
  addNewStudent: () => {},
  seeDetails: () => {},
});
const EditStudentContext = createContext<EditStudentContext>({
  name: "",
  fatherName: "",
  rollNumber: "",
  editedStudent: () => {},
});

const AllStudents = ({ children }: { children: React.ReactNode }) => {
  const [stData, setStData] = useState<StudentType[]>(students);
  const [editIndex, setEditIndex] = useState(0);
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [rollNumber, setRollNumber] = useState("");

  const router = useRouter();

  const deleteStudent = (index: number) => {
    let cloneStudents = [...stData];
    cloneStudents.splice(index, 1);
    setStData([...cloneStudents]);
  };

  const editStudent = (index: number) => {
    setEditIndex(index);
    router.push("./editstudent");
  };

  const editedStudent = (
    editedName: string,
    editedFatherName: string,
    editedRollNumber: string
  ) => {
    let cloneStudents = [...stData];
    cloneStudents[editIndex].name = editedName;
    cloneStudents[editIndex].fatherName = editedFatherName;
    cloneStudents[editIndex].rollNumber = editedRollNumber;
    setStData([...cloneStudents]);
    router.push("./");
  };

  const addNewStudent = (newStudent: StudentType) => {
    router.push("/");
    setStData([...stData, newStudent]);
  };

  const seeDetails = (index: number) => {
    router.push(`${stData[index].rollNumber}`);
  };

  useEffect(() => {
    setName(stData[editIndex].name);
    setFatherName(stData[editIndex].fatherName);
    setRollNumber(stData[editIndex].rollNumber);
  }, [editIndex, stData]);

  return (
    <>
      <EditStudentContext.Provider
        value={{ name, fatherName, rollNumber, editedStudent }}
      >
        <StudentContext.Provider
          value={{
            stData,
            deleteStudent,
            editStudent,
            addNewStudent,
            seeDetails,
          }}
        >
          {children}
        </StudentContext.Provider>
      </EditStudentContext.Provider>
    </>
  );
};

export default AllStudents;

export const StudentDataContext = () => useContext(StudentContext);
export const EditStdDataContext = () => useContext(EditStudentContext);

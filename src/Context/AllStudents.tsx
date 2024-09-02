"use client";

import { StudentType } from "@/Types/StudentType";
import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

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
  test1: string;
  test2: string;
  editedStudent: (
    editedName: string,
    editedFatherName: string,
    editedRollNumber: string,
    editedTest1: string,
    editedTest2: string
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
  test1: "",
  test2: "",
  editedStudent: () => {},
});

const AllStudents = ({ children }: { children: ReactNode }) => {
  const [stData, setStData] = useState<StudentType[]>(students);
  const [editIndex, setEditIndex] = useState<null | number>(null);
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [test1, setTest1] = useState("");
  const [test2, setTest2] = useState("");

  const router = useRouter();

  const deleteStudent = (index: number) => {
    const cloneStudents = [...stData];
    cloneStudents.splice(index, 1);
    setStData([...cloneStudents]);
    if (editIndex !== null && editIndex >= cloneStudents.length) {
      setEditIndex(null);
    }
  };

  const editStudent = (index: number) => {
    setEditIndex(index);
    router.push("./editstudent");
  };

  const editedStudent = (
    editedName: string,
    editedFatherName: string,
    editedRollNumber: string,
    editedTest1: string,
    editedTest2: string
  ) => {
    if (editIndex !== null && editIndex < stData.length) {
      const cloneStudents = [...stData];
      cloneStudents[editIndex] = {
        name: editedName,
        fatherName: editedFatherName,
        rollNumber: editedRollNumber,
        test1: editedTest1,
        test2: editedTest2,
      };
      setStData(cloneStudents);
      router.push("./");
    }
  };

  const addNewStudent = (newStudent: StudentType) => {
    setStData([...stData, newStudent]);
    router.push("/");
  };

  const seeDetails = (index: number) => {
    router.push(`${stData[index].rollNumber}`);
  };

  useEffect(() => {
    if (editIndex !== null && editIndex < stData.length) {
      setName(stData[editIndex].name);
      setFatherName(stData[editIndex].fatherName);
      setRollNumber(stData[editIndex].rollNumber);
      setTest1(stData[editIndex].test1);
      setTest2(stData[editIndex].test2);
    } else {
      setName("");
      setFatherName("");
      setRollNumber("");
      setTest1("");
      setTest2("");
    }
  }, [editIndex, stData]);

  return (
    <>
      <EditStudentContext.Provider
        value={{ name, fatherName, rollNumber, test1, test2, editedStudent }}
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

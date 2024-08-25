"use client";

import { StudentDataContext } from "@/Context/AllStudents";
import Link from "next/link";

type StudentDetailType = {
  params: { rollnumber: number };
};

const StudentDetail = ({ params: { rollnumber } }: StudentDetailType) => {
  const { stData } = StudentDataContext();

  return (
    <>
      {stData
        .filter(({ rollNumber }) => rollnumber === rollNumber)
        .map(({ name, fatherName, rollNumber, test1, test2 }, index) => (
          <div key={name + index} style={{ fontFamily: "sans-serif" }}>
            <h2>
              Name: <span style={{ color: "grey" }}>{name}</span>
            </h2>
            <h2>
              Father Name: <span style={{ color: "grey" }}>{fatherName}</span>
            </h2>
            <h2>
              Roll Number: <span style={{ color: "grey" }}>{rollNumber}</span>
            </h2>
            <h2>
              Test 1:{" "}
              <span style={{ color: test1 === "Passed"? "lime" : "red" }}>
                {test1 === "Passed" ? "Passed" : "Failed"}
              </span>
            </h2>
            <h2>
              Test 2:{" "}
              <span style={{ color: test2 === "Passed" ? "lime" : "red" }}>
                {test2 === "Passed" ? "Passed" : "Failed"}
              </span>
            </h2>
            <hr />
          </div>
        ))}
      <Link href={"/"}>
        <button>Go Back</button>
      </Link>
    </>
  );
};

export default StudentDetail;

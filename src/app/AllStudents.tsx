import Students from "./Students"

const AllStudents = () => {
  return (
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
            <Students />
        </tbody>
    </table>
  )
}

export default AllStudents
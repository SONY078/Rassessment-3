import React from 'react'
import { Link } from 'react-router-dom'
// import jsonData from './table.json';
// import CreateNew from './CreateNew';
export default function Students() {

  // const [studentData, setStudentData] = useState(jsonData);
  // const tableRows = studentData.map((info) => {
  //   return (
  //   <tr>
  //     <td>{info.name}</td>
  //     <td>{info.age}</td>
  //     <td>{info.course}</td>
  //     <td>{info.batch}</td>
  //     <td>{info.change}</td>
  //   </tr>
  //   );
  // });
  // const addRows = (data) => {
  //   const totalStudents = studentData.length;
  //   data.id = totalStudents + 1;
  //   const updatedStudentData = [...studentData];
  //   updatedStudentData.push(data);
  //   setStudentData(updatedStudentData);
  // };
  return (
    <div>
        <br/>
        <br/>
        <h1>Student Details</h1>
        {/* <button id='buttn'>Add Student</button> */}
        <Link to='/student-new' id='buttn'>Add Student</Link>
        {/* <CreateNew func={addRows} /> */}
        <br/>
        <br/>
        <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Course</th>
      <th scope="col">Batch</th>
      <th scope="col">Change</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">John</th>
      <td>30</td>
      <td>MERN</td>
      <td>January</td>
      <td><Link to='/student-new'>Edit</Link></td>
      {/* <td><a href='#'>Edit</a></td> */}
    </tr>
    <tr>
      <th scope="row">Lisa</th>
      <td>25</td>
      <td>MERN</td>
      <td>March</td>
      <td><Link to='/student-new'>Edit</Link></td>
      {/* <td><a href='#'>Edit</a></td> */}
    </tr>
    <tr>
      <th scope="row">rose</th>
      <td>25</td>
      <td>MERN</td>
      <td>December</td>
      <td><Link to='/student-new'>Edit</Link></td>
      {/* <td><a href='#'>Edit</a></td> */}
    </tr>
    <tr>
      <th scope="row">Varun</th>
      <td>25</td>
      <td>MERN</td>
      <td>October</td>
      <td><Link to='/student-new'>Edit</Link></td>
      {/* <td><a href='#'>Edit</a></td> */}
    </tr>
    <tr>
      <th scope="row">Charles</th>
      <td>18</td>
      <td>MERN</td>
      <td>December</td>
      <td><Link to='/student-new'>Edit</Link></td>
      {/* <td><a href='#'>Edit</a></td> */}
    </tr>
    <tr>
      <th scope="row">Chae</th>
      <td>20</td>
      <td>MERN</td>
      <td>March</td>
      <td><Link to='/student-new'>Edit</Link></td>
      {/* <td><a href='#'>Edit</a></td> */}
    </tr>
    {/* {tableRows} */}
  </tbody>
</table>
    
    
    </div>
  )
}

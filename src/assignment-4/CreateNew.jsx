import React,{useState} from 'react'
import "./navstyling.css"
import { Link } from 'react-router-dom';
export default function CreateNew(props) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [course, setCourse] = useState('');
    const [batch, setBatch] = useState('');

    const changeName = (event) => {
        setName(event.target.value);
    };
    const changeAge = (event) => {
        setAge(event.target.value);
    };
    const changeCourse = (event) => {
        setCourse(event.target.value);
    };
    const changeBatch = (event) => {
        setBatch(event.target.value);
    };
    const transferValue = (event) => {
        event.preventDefault();
        const val = {
        name,
        age,
        course,
        batch
        };
        props.func(val);
        clearState();
    };
    
    const clearState = () => {
        setName('');
        setAge('');
        setCourse('');
        setBatch('');
    };

  return (
    <div class="col-md-4 mt-5" id='group'>
        <div id="group-con">
        <div class="textOnInput">
            <label for="inputText">Name</label>
            <input className='form-control' type="text" value={name} onChange={changeName}/>
        </div>
        <div class="textOnInput">
            <label for="inputText">Age</label>
            <input className='form-control' type="text" value={age} onChange={changeAge}/>
        </div>
        <div class="textOnInput">
            <label for="inputText">Course</label>
            <input className='form-control' type="text" value={course} onChange={changeCourse}/>
        </div>
        <div class="textOnInput">
            <label for="inputText">Batch</label>
            <input className='form-control' type="text" value={batch} onChange={changeBatch}/>
        </div>
        </div>
        {/* <button id='bt1' onClick={closePage}>Cancel</button> */}
        <Link to='/student' id="bt1">Cancel</Link>
        <button id='bt2' onClick={transferValue}>Update</button>
    </div>


  );
}

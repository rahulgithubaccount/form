import React,{useEffect, useState} from 'react'
import axios from "axios";

function Home() {
   
const[name,setfname]=useState("");

 
const onsubmites = async(e)=>{
 e.preventDefault();
       await axios.post("http://localhost:3001/poststudents",{
      name
       });
    }

  return (
    <div className='container  my-5' >
        <div className='row'>
            <div className='col-md-6 mx-auto'>
                <form onSubmit={onsubmites}>
            <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Name</label>
  <input type="text" className="form-control" onChange={(e)=>setfname(e.target.value)} name='name' value={name} id="exampleFormControlInput1" placeholder="name"/>
</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Roll Number</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>


<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<button type="submit" className='btn btn-primary' >Submit</button>
</form>
            </div>

        </div>

    </div>
  )
}

export default Home
import React, { useState } from "react";
import axios from "axios";
import Add from "./Add";
import {Navigate, useNavigate} from "react-router-dom"

function Home() {
  const [users, setusers] = useState({
    name: "",
    branch: "",
    rollno: "",
    dob: "",
    year: "",
    cgpa: "",
  });


  const handleChanege = (e) => {
    setusers({ ...users, [e.target.name]: e.target.value });
  };



  const onsubmites = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/poststudents", {
      name: users.name,
      year: users.year,
      dob: users.dob,
      branch: users.branch,
      rollno: users.rollno,
      cgpa: users.cgpa,
    });
    

  };

  return (
    <div className="container  my-5">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <form onSubmit={onsubmites}>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                onChange={handleChanege}
                name="name"
                value={users.name}
                id="exampleFormControlInput1"
                placeholder="name"
              />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Roll Number
              </label>
              <input
                type="year"
                className="form-control"
                onChange={handleChanege}
                name="rollno"
                value={users.rollno}
                id="exampleFormControlInput1"
                placeholder="rollno"
              />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Branch
              </label>
              <input
                type="text"
                className="form-control"
                onChange={handleChanege}
                name="branch"
                value={users.branch}
                id="exampleFormControlInput1"
                placeholder="branch"
              />
            </div>

            {/* <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Year
              </label>
              <input
                type="text"
                className="form-control"
                onChange={handleChanege}
                name="year"
                value={users.year}
                id="exampleFormControlInput1"
                placeholder="year"
              />
            </div> */}

            {/* <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                DOb
              </label>
              <input
                type="date"
                className="form-control"
                onChange={handleChanege}
                name="dob"
                value={users.dob}
                id="exampleFormControlInput1"
                placeholder="dob"
              />
            </div> */}

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                CGPA
              </label>
              <input
                type="text"
                className="form-control"
                onChange={handleChanege}
                name="cgpa"
                value={users.cgpa}
                id="exampleFormControlInput1"
                placeholder="cgpa"
              />
            </div>

            <button type="submit" className="btn btn-primary" >
              Submit
            </button>
          </form>
        </div>

        <div className="col-md-8">
          <Add/>
        </div>
      </div>
    </div>
  );
}

export default Home;

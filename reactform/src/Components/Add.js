import React,{useEffect, useState} from 'react';
import axios from 'axios';


function Add(){



    const [Data, setData] = useState([])


    useEffect(()=>{
        getuserData();
    },[])
    const getuserData= async()=>{
        const response =  await axios.get(`http://localhost:3001/getstudents`)
        setData(response.data)
        console.log(response.data);
       
    }
   

    const deletedata = async(_id)=>{
          await axios.delete(`http://localhost:3001/deletepost/${_id}`)
     const newdata = Data.filter(item=>{
         return item._id!==_id
     })
     setData(newdata)
    }

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12">

            <table className="table">
            <thead className="bg-white ">
              <tr>
                <th scope="col">S.no</th>
                <th scope="col"> Name</th>
                <th scope="col">Branch</th>
                <th scope="col">Roll No</th>
                <th scope="col">CGPA</th>
               
              </tr>
            </thead>
            <tbody>
              {Data.map((item, i) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{i + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.branch}</td>
                    <td>{item.rollno}</td>
                    <td>{item.cgpa}</td>
                    
                  <td onClick={()=>deletedata(item.id)}><i class="fa-solid fa-trash-can"></i></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
            </div>

        </div>

    </div>
  )
}

export default Add
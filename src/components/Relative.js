import React from 'react'


  const relatives = [
  "Uncle Rajesh",
  "Aunt Sunita",
  "Cousin Rohan",
  "Grandpa Mohan",
  "Grandma Sita",
  "Cousin Neha",
  "Uncle Vijay"
];
const Relative = () => {

  
  return (
    <div>
        <h1>Relative List</h1>
        <ul>
            {
                relatives.map((value,index)=>{
                 return <li key={index}>{value}</li>
                })
            }
        </ul>

    </div>
  )
}

export default Relative
import React from 'react'

export default function Education() {
  return (
    <div className="education_div">

    <h2>Education</h2>

    <input type='text' placeholder='School name' />
    <input type='text' placeholder='City' />
    <input type='text' placeholder='Degree' />

    <button className="edu_btn">Add</button>
    <button className="edu_btn">Delete</button>


    </div>
  )
}

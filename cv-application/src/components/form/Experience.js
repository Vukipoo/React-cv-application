import React from 'react'

export default function () {
  return (
    <div className="exp_div">
        <h2>Experience</h2>

        <input type='text' placeholder='Position'/>
        <input type='text' placeholder='Company'/>
        <input type='text' placeholder='City'/>
        <input type='text' placeholder='From'/>
        <input type='text' placeholder='To'/>

        <button className="exp_btn">Add</button>
        <button className="exp_btn">Delete</button>

    </div>
  )
}

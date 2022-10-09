import React from 'react'
import  './Adventures.css'

function Adventures() {
  return (
    <div>
      <h1 className='heading'>List of Events</h1>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Event Name</th>
      <th scope="col">Location</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr className="table-dark">
      <th scope="row">1</th>
      <td>The Avengers - 2012</td>
      <td>Ottawa Cres Public School</td>
      <td>20$</td>
    
    </tr>
    <tr className="table-dark">
      <th scope="row">2</th>
      <td>Avengers: Age of Ultron - 2015</td>
      <td>Betterton Cres</td>
      <td>30$</td>
    </tr>
    <tr className="table-dark">
      <th scope="row">3</th>
      <td>Avengers: Infinity War - 2018</td>
      <td>Humberwood Downs</td>
      <td>50$</td>
    </tr>
    <tr className="table-dark">
      <th scope="row">4</th>
      <td>Avengers: Endgame - 2019</td>
      <td>North York</td>
      <td>40$</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Adventures

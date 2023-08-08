import React from 'react'

export default function Transaction({transactions}) {
  return (
    <div>
       
       <li className="minus" >
       {transactions.text}<span>-$400</span><button className="delete-btn">x</button>
     </li> 

    </div>
  )
}

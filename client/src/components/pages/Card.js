import React from 'react'
import "../css/card.css"

const Card = ({data}) => {
  console.log("DATA",data)
  return (
  <>
  <div class="card-one">
      <div class="card-two">
        <img src={data.img} alt="" class="card-img1" />
      </div>
      <div class="card-three">
        <p class="card-p1">{data.title}</p>
        <p class="card-p2">
          <i class="fa-solid fa-hand-pointer card-icon2"></i>
          <i class="fa-solid fa-eye card-icon1"></i>
        </p>
        <p class="card-p3">
         {data.description}
        </p>
      </div>
    </div>
  
  </>
  )
}

export default Card

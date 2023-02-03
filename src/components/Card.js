import React from 'react'

const Card = (props) => {
  return (
    <div className="bg-light-green br3 pa3 ma2 grow shadow-5 bw2 card">
      <img src={"https://robohash.org/"+props.id+"?200x200"} alt="robot" />
      <div>
        <h1 className='titless'>{props.name}</h1>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Card
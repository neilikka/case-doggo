import React from 'react';

const resultList = (results) =>

  results.map(item => {
    if(item.number%2 === 0)
      return (
        <div key={item.id} class="results-background m-3">
          <a href={item.url}>   
            <h5>{item.number}   {item.title}</h5>
          </a>
          <p class="results-text">{item.text}</p>         
        </div>   
      )
    return (
      <div key={item.id} class="m-3"> 
        <a href={item.url}>   
          <h5>{item.number}   {item.title}</h5>
        </a>  
        <p class="results-text">{item.text}</p>
      </div>
    )  
  });     

const Result = ({results}) => {
  return (
    <div>
      {resultList(results)}
    </div>
  )
}

export default Result;
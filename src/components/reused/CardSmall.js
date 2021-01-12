import React from 'react';

const cards = (cardlist) => 
  
  cardlist.map(item => {

    return (
        <div class="col mb-4" key={item.id}>
            <div class="card card-small">           
                {(item.tag === ''
                    ? <div></div>     
                    : <span className="tag">{item.tag}</span>
                )}
                <img src={item.image} class="card-img-top" alt="..."></img>
                <div class="card-body d-flex">
                    <h5 class="card-title align-items-center d-flex small-card-title">{item.name}</h5>
                    <a href={item.url} class="btn btn-secondary float-right d-flex stretched-link mt-2">View</a>
                </div>
            </div>
        </div>  
    )   
  });     

const CardSmall = ({ cardlist }) => {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3">{cards(cardlist)}</div>           
        </div>
    );
}

export default CardSmall;
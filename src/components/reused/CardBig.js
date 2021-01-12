import React from 'react';

const cards = (cardlist) => 

cardlist.map(item => {

    return (
    <div class="col mb-4" key={item.id}>
        <div class="card card-big">
            <div class="card-body p-0 pr-2 m-0">
                <div class="row">
                    <div class="col-5">
                        {(item.tag === ''
                            ? <div></div>     
                            : <span className="tag">{item.tag}</span>
                        )}
                        <img src={item.image} class="card-img-side float-left" alt="sans" width="200px" />
                    </div>                    
                    <div class="col-7 pl-4 pt-2">
                        <h5 class="card-title pb-2">{item.name}</h5>
                        <p class="card-text">{item.text}</p>
                        <a href={item.url} class="btn btn-secondary float-right d-flex stretched-link">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    )   
  });

const CardBig = ({ cardlist }) => {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-6">{cards(cardlist)}</div>           
        </div>
    );
}

export default CardBig;
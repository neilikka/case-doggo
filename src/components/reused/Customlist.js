import React from 'react';

const customlist = (list) =>
  list.map(item =>  
    <li key={item.id}><a href="/error">{item.name}</a></li>                        
  ) 

const Customlist = ({ list }) => {
    return (
        <div>
            <ul class="customlist">{customlist(list)}</ul>         
        </div>
    );
}

export default Customlist;
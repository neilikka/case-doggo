import React from 'react';

const infoBox = (infolist) =>
    infolist.map(item => (
        <li key={item.id}>
            {item.text1}
            <a href="/error">{item.link2}</a>
            {item.text3}
            <a href="/error">{item.link4}</a>
            {item.text5}
        </li>   
));

const InfoBox = ({ infolist }) => {
    return (
        <div>
            <ul class="infobox">{infoBox(infolist)}</ul>         
        </div>
    );
}

export default InfoBox;
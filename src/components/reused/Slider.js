import React, { useState } from 'react';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

const Slider = ({min, max, label, ending}) => {
    const [minValue, setMinValue] = useState(min)
    const [maxValue, setMaxValue] = useState(max)
 
    const onSlide = (event) => {
        setMinValue((event[0]*1).toFixed())
        setMaxValue((event[1]*1).toFixed())
    };
   
      return (
        <div class="slider">
            <div class="pb-2"><b>{label}:</b><br/> {minValue} - {maxValue} {ending} </div>        
          <Nouislider  connect start={[min, max]} behaviour="tap" range={{min: [min], max: [max]}} onSlide={onSlide} />
        </div>
      );

  }

export default Slider;
import React, { useState } from "react";
import Slider from "./reused/Slider";

const Filter = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const hideWhenVisible = { display: filterVisible ? "none" : "" };
  const showWhenVisible = { display: filterVisible ? "" : "none" };

  return (
    <div>
      <div class="filter" style={hideWhenVisible}>
        <p onClick={() => setFilterVisible(true)}>
          <i class="far fa-plus-square white-background"></i> Filter results
        </p>
      </div>

      <div class="filter" style={showWhenVisible}>
        <p onClick={() => setFilterVisible(false)}>
          <i class="far fa-minus-square white-background"></i> Filter results
        </p>
        <div class="row">
          <div class="col m-2">
            <b>Type of content:</b>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" htmlFor="blog">
                Blog writings and videos
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" htmlFor="courses">
                Courses
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" htmlFor="maintenance">
                Maintenance services
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label class="form-check-label" htmlFor="workers">
                Workers
              </label>
            </div>
          </div>
          
          <div class="col">
            <Slider min={0} max={500} label={"Price"} ending={"euros"} />
          </div>
          <div class="col">
            <Slider min={0} max={120} label={"Duration"} ending={"minutes"} />
          </div>
          <div class="col">
            <Slider min={0} max={12} label={"Number of meetings"} ending={"meetings"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
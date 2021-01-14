import React from "react";

const SortButton = ({ label }) => {
  return (
    <button class="button-sort" type="button">
      {label} <i class="fas fa-long-arrow-alt-up"></i>
      <i class="fas fa-long-arrow-alt-down"></i>
    </button>
  );
};

export default SortButton;

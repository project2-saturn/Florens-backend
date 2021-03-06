import React from "react";

export default function (props) {
  // console.log("here");
  // console.log(props.options);
  console.log(props.selectedOptions);
  return (
    <>
    <div  class="filterFirstFlexContainer">
      <p class="filterP">{props.title}</p>
      <ul class="filterUl">
        <li class="filterLi"  onClick={(event) => props.handleSelectAllOption(event, props.name)}>All</li>
        <li class="filterLi">|</li>
        <li class="filterLi" onClick={(event) => props.handleClearAllOption(event, props.name)}>Clear</li>
      </ul>
    </div>  
      <div class="filterDiv">
        {props.options ? (
          props.options.map((option) =>
            props.selectedOptions.includes(option) ? (
              <button
                class="filterBtns filterBtnsSelected"
                value={option}
                key={option}
                onClick={(event) =>
                  props.handleSearchOptionsChange(event, props.name)
                }
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ) : (
              <button
                class="filterBtns"
                value={option}
                key={option}
                onClick={(event) =>
                  props.handleSearchOptionsChange(event, props.name)
                }
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            )
          )
        ) : (
          <></>
        )}
      </div>
      
    </>
  );
}

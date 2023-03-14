import React from "react";
const Counter = (props) => {
  
  const formatCount = () => {
    return props.value === 0 ? "empty" : props.value;
  };
  const getBageClasses = () => {
    let classes = "badge m-2 ";
    classes += props.value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };  

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBageClasses()}>{formatCount()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={()=>props.onIncrement(props.id)}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={()=>props.onDecrement(props.id)}>
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;

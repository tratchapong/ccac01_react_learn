import React from "react";
import JobItem from "./JobItem";

function JobContainer(props) {
  // props?.todos?.length > 0 && console.log(props.todos[0])
  console.log(props.todos);
  return (
    <div className="job-container">
      {props.todos.map((el) => (
        <JobItem todo={el} />
      ))}
    </div>
  );
}

export default JobContainer;

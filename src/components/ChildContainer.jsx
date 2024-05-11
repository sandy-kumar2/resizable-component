import React from "react";

const ChildContainer = ({ name, number }) => {
  return (
    <div className={`child ${name}`}>
      <h1>Window {number}</h1>
      <h2>Component {number}</h2>
      <p>
       You can expand or shrink these Component using react-resizable-panels.
      </p>
    </div>
  );
};

export default ChildContainer;

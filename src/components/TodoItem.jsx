import React, { useState } from "react";

function TodoItem(props) {
  const [line, Setline] = useState(false);

  return (
    <div>
      <li>{props.text}</li>
    </div>
  );
}

export default TodoItem;

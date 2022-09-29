import React from "react";

function HeaderCom({number, artır}) {
  console.log("re-render edildi");

  return (
    <div>
      <h1>Header {number}</h1>
      <button onClick={artır}>Click</button>


      <hr />
    </div>
  );
}

export default React.memo(HeaderCom);

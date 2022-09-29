import React from "react";

function HeaderCom({number, data}) {
  console.log("re-render edildi");

  return (
    <div>
      <h1>Header {number}</h1>
      <code> {JSON.stringify(data)} </code>

      <hr />
    </div>
  );
}

export default React.memo(HeaderCom);

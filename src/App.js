import React from "react";

const App = () => {
  const val = 0;
  // Если первый ложен, то он и отобразится
  // Если первый инстинен, то отобразится второй
  return <div>{val && <h2>Val is {val}</h2>}</div>;
};

export default App;

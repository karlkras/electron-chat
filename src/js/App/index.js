import React from "react";
const App = () => {
  const title = "Hello World";
  const enhancedTitle = `${title} - React App`;

  const sendNotification = () => (
    window.sendNotification("My Custom Message")
  );

  return (
    <>
      <h1>{enhancedTitle}</h1>
      <button onClick={sendNotification}>I'm a button</button>
    </>
  )
}

export default App;
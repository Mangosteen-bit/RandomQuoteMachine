import React from "react";


const Quote = ({ quoteText, color }) => (
  <div
    id="text"
    style={{
      color: color
    }}
  >
    {quoteText}
  </div>
);

export default Quote;

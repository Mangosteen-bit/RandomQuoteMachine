import React from "react";
const Author = ({quoteAuthor, color}) =>
  <div id="author" style={{
    color: color
  }}>
  ~ {quoteAuthor}
</div>

export default Author;
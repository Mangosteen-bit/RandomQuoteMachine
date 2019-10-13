import React from "react";
import Quote from "./Quote";
import Author from "./Author";
import MediaLinks from "./MediaLinks";
import SubmitButton from "./SubmitButton";
import { pure } from "recompose";

const QuoteBox = pure(({ quoteText, color, quoteAuthor, handleClick }) => (
  <div id="quote-box">
    <Quote quoteText={quoteText} color={color} />
    <Author quoteAuthor={quoteAuthor} color={color} />
    <nav>
      <MediaLinks
        quoteText={quoteText}
        quoteAuthor={quoteAuthor}
        color={color}
      />
      <SubmitButton color={color} onClick={() => handleClick()} />
    </nav>
  </div>
));

export default QuoteBox;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
const MediaLinks = ({ quoteText, quoteAuthor, color }) => (
  <a
    id="tweet-quote"
    type="button"
    href={
      "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
      encodeURIComponent('"' + quoteText + '" ' + quoteAuthor)
    }
    target="_blank"
    style={{
      color: color
    }}
  >
    <FontAwesomeIcon icon={faTwitter} />
  </a>
);

export default MediaLinks;

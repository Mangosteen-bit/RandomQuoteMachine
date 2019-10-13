import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const SubmitButton = ({ color, onClick }) => (
  <a id="new-quote" type="button" onClick={onClick} style={{ color: color }}>
    <FontAwesomeIcon icon={faAngleDoubleRight} />
  </a>
);

export default SubmitButton;

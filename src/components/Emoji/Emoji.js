import React from "react";

const Emoji = ({ label, symbol, ...props }) => (
  <span
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
    {...props}
  >
    {symbol}
  </span>
);

export default Emoji;

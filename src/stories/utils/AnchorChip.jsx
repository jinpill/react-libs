import React from "react";

const AnchorChip = (props) => (
  <a className="anchor-chip" href={props.href} target="_blank">
    <img className="anchor-chip__icon" src={props.src} alt={props.name} />
    <span className="anchor-chip__name">{props.name}</span>
  </a>
);

export default AnchorChip;

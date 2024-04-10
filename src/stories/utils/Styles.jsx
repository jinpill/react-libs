import React from "react";

const Styles = () => (
  <style>
    {`
h1, h2, h3, h4, h5, h6, strong {
  color: #ff6b6b !important;
}

.anchor-chip {
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.5rem;

  border-radius: 0.25rem;
  border: 1px solid rgba(38, 85, 115, 0.15);
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0.0625rem 0.1875rem 0;
}

.anchor-chip__icon {
  width: 1.5rem;
  height: 1.5rem;
}

.anchor-chip__name {
  margin-left: 0.375rem;
  transform: translateY(0.0625rem);

  text-decoration: none;
  color: #404040;
  font-size: 0.875rem;
}

pre {
  padding: 1rem 0.75rem 1.25rem !important;

  border-radius: 0.25rem !important;
  border: 1px solid rgba(38, 85, 115, 0.15) !important;
  background-color: #ffffff !important;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0.0625rem 0.1875rem 0;

  color: #404040 !important;
  font-size: 0.875rem !important;
}
`}
  </style>
);

export default Styles;

import React, { useState, useEffect, useRef } from "react";
import "./Select.scss";

export default function Select(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >
) {
  return <select className="rts-ui__select">
    <option>Hi</option>
  </select>;
}

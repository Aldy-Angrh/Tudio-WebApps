import React from "react";
export const MobileMenu = (props) => {
  return (
    <div className={props.className}>
      <div>
        <text>Home</text>
      </div>
      <div>
        <text>Project</text>
      </div>
      <div>
        <text>Skils</text>
      </div>
      <div>
        <text>Contact</text>
      </div>
      <div>
        <text>About</text>
      </div>
    </div>
  );
};

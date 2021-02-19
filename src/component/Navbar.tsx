import React from "react";

export interface NavbarProps {
  content: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <div>
      <p>{props.content}</p>
    </div>
  );
};

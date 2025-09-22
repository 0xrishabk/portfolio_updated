import type { ReactNode } from "react";
import "./Card.css";

type ChildProp = {
  children: ReactNode;
};

function Card({children}: ChildProp) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default Card;
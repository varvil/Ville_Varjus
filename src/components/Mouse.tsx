import "../styles/cursor.css";
import {MouseCursor} from "../hooks/MouseCursor";

const DotRing = () => {
  const { x, y } = MouseCursor();
  return (
    <>
      <div
        className="dot"
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default DotRing;
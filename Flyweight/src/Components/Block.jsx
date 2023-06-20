import React from "react";
import "./Block.css";

const Block = ({ color }) => {
  return <div className={`block ${color}`} />;
};

const MemoizedBlock = React.memo(Block, (prevProps, nextProps) => {
  return prevProps.color === nextProps.color;
});

// export default Block;
export default MemoizedBlock;

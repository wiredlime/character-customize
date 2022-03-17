import React from "react";

function Item({ path, zindex, itemStack }) {
  return (
    <img
      className="item-ava"
      style={{ zIndex: zindex }}
      src={`./character/${path}/${itemStack}.png`}
      alt={""}
    />
  );
}

export default Item;

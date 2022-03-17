import React from "react";

function Itemfield({ fieldName, itemArray, itemState, setItemState }) {
  return (
    <div className="item-field">
      <h2>{fieldName}</h2>
      <div className="item-container">
        {itemArray.map((item) => {
          return (
            <div
              className={{ itemState } === item.key ? "selected" : ""}
              onClick={() => {
                setItemState(item.key);
              }}
              key={item.key}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Itemfield;

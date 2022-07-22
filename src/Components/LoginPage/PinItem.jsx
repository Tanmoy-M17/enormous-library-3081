import React, { forwardRef } from "react";
const style = {
  fontSize: 18,
  margin: 7,
  padding: 10,
  width: 20,
  textAlign: "center",
};
const PinItem = forwardRef(({ max, handleBackSpace, handleFocus,complete }, ref) => {
  const handleInput = (e, index) => {
    if (e.keyCode === 8) {
      handleBackSpace(e);
    } else {
      handleFocus(e);
    }
  };
  return (
    <div>
      <input style={complete ? {...style,color:"green",background:"lightgreen"} : style} onKeyUp={handleInput} ref={ref} maxLength={max} />
    </div>
  );
});

export default PinItem;

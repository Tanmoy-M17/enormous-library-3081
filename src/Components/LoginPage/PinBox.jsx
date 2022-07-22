import React, { useRef, useState } from "react";
import PinItem from "./PinItem";

const PinBox = ({ length, perBox }) => {
  const [value, setValue] = useState(new Array(length).fill(""));
  let inputRef = useRef([]);
  const [successful,setSuccessful]=useState(false);
  const handleBackspace = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    value[index] = e.target.value;
    if(value.join("").length === length ){

        setSuccessful(false);
    }else{
        setSuccessful(false);
    }
  };
  const handleFocus = (e, index) => {
    console.log(successful,"bool");
    let val = e.target.value;
    value[index] = val;
    setValue(value);
    if (index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    if(value.join("").length === length ){
        setSuccessful(false);
    }else{
        setSuccessful(false);
    }
  };
  const handlePaste = (e) => {
    e.preventDefault();
    let data = e.clipboardData.getData("text").split("");
    console.log(data);
    if (data.length < 5) {
      data.forEach((item, index) => {
        console.log("count", index);
        inputRef.current[index].value = item;
        value[index] = item;
        inputRef.current[index].focus();
      });
      setSuccessful(false);
    } else {
      data.forEach((item, index) => {
        console.log("count", index);
        inputRef.current[index].value = item;
        value[index] = item;
        if (index < length - 1) {
          inputRef.current[index + 1].focus();
        }
      });
      setSuccessful(false);
    }
    console.log(inputRef.current);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div
        onPaste={handlePaste}
        style={{ display: "flex", justifyContent: "center"}}
      >
        {value.map((item, index) => {
          return (
            <PinItem complete={successful}
              handleFocus={(e) => handleFocus(e, index)}
              handleBackSpace={(e) => handleBackspace(e, index)}
              key={index}
              ref={(element) => {
                inputRef.current[index] = element;
                // console.log(element, inputRef.current);
              }}
              max={perBox}
            />
          );
        })}
      </div>
    </div>
  );
};



export default PinBox;

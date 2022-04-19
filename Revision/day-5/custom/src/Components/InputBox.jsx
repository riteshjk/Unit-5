import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { PinItem } from "./PinItem";

export const InputBox = ({ length, label, perBox, onChange }) => {
  const [boxe, setBox] = useState(new Array(length).fill(""));
  const element = useRef(new Array(length).fill(0));

  const handlechange = (box, index) => {
    console.log(box, index);
    const value = [...boxe];
    value[index] = box;
    setBox(value);
    if (box.length > 0 && box.length <= perBox && index < length - 1) {
      element.current[index + 1].focus();
    }
    onChange(value.join(""));
  };

  const handleBackspace = (box, index) => {
    if (index > 0) {
      element.current[index - 1].focus();
    }
    const value = [...boxe];
    value[index] = box;
    setBox(value);
    onChange(value.join(""));
  };

  useEffect(() => {
    console.log(element);
  }, []);

  return (
    <div>
      <h1>{label}</h1>
      {boxe.map((item, index) => (
        <PinItem
          key={index}
          ref={(n) => (element.current[index] = n)}
          onChange={(b) => handlechange(b, index)}
          onBackspace={(b) => handleBackspace(b, index)}
          max={perBox}
        />
      ))}
    </div>
  );
};

InputBox.propTypes = {
  length: PropTypes.number.isRequired,
  perBox: PropTypes.number,
  label: PropTypes.string,
};

InputBox.defaultProps = {
  label: "Label",
  perBox: 3,
};

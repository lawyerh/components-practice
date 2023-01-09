import PropTypes from "prop-types";


function Button(
  props,
  { primary, secondary, success, warning, rounded, outline }
) {
  // Checks which attributes were passed as props to the button and builds a class string with each.
  // Ignores children prop
  function joinKeys() {
    let classString = "button ";
    Object.keys(props).forEach((key, index) => {
      if (key !== "children") {
        classString += "button--" + key + " ";
      }
    });
    return classString;
  }
  return <button className={joinKeys()}>{props.children}</button>;
}

// Throws an error if more than one main button attribute is provided
Button.propTypes = {
  checkButtonVariation: ({ primary, secondary, success, warning }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning);

    if (count > 1) {
      return new Error(
        'Only one main button variation may be selected. Variations are "primary - secondary - success - warning"'
      );
    }
  },
};

export default Button;

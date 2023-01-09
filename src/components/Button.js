import PropTypes from "prop-types";

// Component
function Button(props) {
  // Checks which attributes were passed as props to the button and builds a class string with each.
  // Ignores children prop
  function joinKeys() {
    let classString = "button ";
    Object.keys(props).forEach((key, index) => {
      if (
        key !== "children" &&
        !key.match("onClick") &&
        !key.match("onMouse")
      ) {
        classString += "button--" + key + " ";
      }
    });
    return classString;
  }

  // Because we are pulling out the entire props object,
  // We lose access to the ...rest keyword which would simplify finding event handlers
  // Function iteraties through the props object and copies any argument that is a function
  function findEventHandlers() {
    let eventHandlers = {};
    Object.keys(props).forEach((key) => {
      if (typeof props[key] === "function") {
        eventHandlers[key] = props[key];
      }
    });
    return eventHandlers;
  }

  return (
    <button {...findEventHandlers()} className={joinKeys()}>
      {props.children}
    </button>
  );
}

// VALIDATION

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

import PropTypes from "prop-types";

// Button is compatible with ONE of the following classes
// primary - secondary - warning - success
// and will accept either: rounded - outline as a second class

// Event handlers can be handed to the Button component
// Additional className's can be added to the Button component

// Component
function Button(props) {
  console.log(props);
  // Checks which attributes were passed as props to the button and builds a class string with each.
  // Ignores children prop. Because we need the whole props object, we can't access the ...rest keyword
  function joinKeys() {
    let classString = "button ";
    Object.keys(props).forEach((key, index) => {
      if (
        key !== "children" &&
        typeof key !== Object &&
        !key.match("onClick") &&
        !key.match("onMouse")
      ) {
        classString += "button--" + key + " ";
      }
    });
    return classString;
  }

  // Because we are pulling out the entire props object, which is neccesary because of joinKeys
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
    <button {...findEventHandlers()} className={joinKeys() + props.className}>
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

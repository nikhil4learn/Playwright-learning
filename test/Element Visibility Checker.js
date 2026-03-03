/**
 * Validates UI element properties and recommends QA action.
 * @param {boolean} isPresent - Element exists in DOM
 * @param {boolean} isDisplayed - Element is visible
 * @param {boolean} isEnabled - Element is interactable
 */
function validateElementState(isPresent, isDisplayed, isEnabled) {
  let state;
  let action;
  let severity 
  // Determine State
  if (!isPresent) {
    state = "NOT FOUND";
  } else if (isPresent && !isDisplayed) {
    state = "HIDDEN";
  } else if (isPresent && isDisplayed && !isEnabled) {
    state = "DISABLED";
  } else if (isPresent && isDisplayed && isEnabled) {
    state = "READY";
  } else {
    state = "UNKNOWN";
  }

  // Determine Severity using Ternary Operator
  //const severity = state === "READY" ? "OK" : (state === "NOT FOUND" ? "CRITICAL" : "WARNING");

  // Determine Action
  switch (state) {
    case "READY":
      action = "Proceed with interaction.";
      severity="ok"
      break;
    case "DISABLED":
      action = "Wait for state change or report bug.";
      severity="warning"
      break;
    case "HIDDEN":
      action = "Scroll into view or check visibility logic.";
      severity="warning"
      break;
    case "NOT FOUND":
      action = "Check selector or wait for element loading.";
      severity="critical"
      break;
    default:
      action = "Investigate element properties.";
  }

  console.log(`State: ${state} | Severity: ${severity} | Action: ${action}`);
}

// Example Scenarios
//validateElementState(true, true, true);   // READY
 //validateElementState(true, true, false);  // DISABLED
 validateElementState(true, false, false); // HIDDEN
 //validateElementState(false, false, false);// NOT FOUND

function updateBodyClass() {
  // Get selected values src="http://127.0.0.1:5500/proavstg.js"
  const valueOne = document.querySelector('input[name="valueone"]:checked');
  const valueTwo = document.querySelector('input[name="valuetwo"]:checked');
  const roomCustmiser = document.querySelector('[room-custmiser="wrapper"]');

  if (valueTwo) {
    const singleRadio = document.querySelector("#Single");
    if (singleRadio) {
      singleRadio.click(); // Select the first item (#Single) in valueOne
    }
  }

  // Make sure both options are selected
  if (valueOne && valueTwo && roomCustmiser) {
    // Remove all previous classes
    roomCustmiser.className = ""; // Clears all classes

    // Generate the new class based on selected values
    const newClass =
      valueOne.value.toLowerCase() + valueTwo.value.toLowerCase();
    roomCustmiser.classList.add(newClass);
  }

  // Update active state for parent elements
  document.querySelectorAll(".cust_radio-btn-wrap").forEach((wrapper) => {
    wrapper.classList.remove("active"); // Remove active from all
  });

  // Add active class to the parents of selected radio buttons
  if (valueOne) {
    valueOne.closest(".cust_radio-btn-wrap").classList.add("active");
  }
  if (valueTwo) {
    valueTwo.closest(".cust_radio-btn-wrap").classList.add("active");
  }

  // Hide/Show logic for valueOne based on valueTwo
  const huddleChecked = valueTwo && valueTwo.value === "Huddle";

  const smallChecked = valueTwo && valueTwo.value === "Small";
  const singleRadiot = document.querySelector("#Single");
  document.querySelectorAll('input[name="valueone"]').forEach((radio) => {
    const parent = radio.closest(".cust_radio-btn-wrap");
    if (parent) {
      if (
        (huddleChecked &&
          (radio.value === "Dual" || radio.value === "Signature")) ||
        (smallChecked && radio.value === "Dual")
      ) {
        parent.style.display = "none";
        if (
          huddleChecked &&
          (radio.value === "Dual" || radio.value === "Signature")
        ) {
          singleRadiot.click(); // Trigger the click for Huddle logic
        }
      } else {
        parent.style.display = ""; // Reset to default
      }
    }
  });
}

// Handle button click to reset and apply class from attribute
function handleButtonClick(event) {
  const roomCustmiser = document.querySelector('[room-custmiser="wrapper"]');
  const button = event.target;

  if (roomCustmiser) {
    // Clear all classes
    roomCustmiser.className = "";

    // Add the class specified in the button's "btn" attribute
    const newClass = button.getAttribute("btn");
    if (newClass) {
      roomCustmiser.classList.add(newClass);
    }
  }

  // Uncheck all radio buttons
  document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.checked = false;
  });

  // Remove active state from all radio button wrappers
  document.querySelectorAll(".cust_radio-btn-wrap").forEach((wrapper) => {
    wrapper.classList.remove("active");
  });
}

// Listen for changes on the radio buttons
document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("change", updateBodyClass);
});

// Listen for button clicks
document.querySelectorAll("a[btn]").forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

// Initialize with the default values (Single and Huddle selected)
window.addEventListener("load", () => {
  // Ensure the elements exist
  const singleRadio = document.querySelector("#Single");
  const huddleRadio = document.querySelector("#Huddle");

  if (singleRadio && huddleRadio) {
    // Set initial checked state for "Single" and "Huddle"
    singleRadio.checked = true;
    huddleRadio.checked = true;
    // Update the body class and active state accordingly
    updateBodyClass();
  }
});
